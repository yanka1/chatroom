import md5 from "md5";
import axios from "axios";
import qs from 'qs'


axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
//POST传参序列化
let timer = null;
var _http = axios.create({
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  baseURL: process.server ? `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}` : ''
});
_http.interceptors.request.use(
  config => {
    setConfig(config);
    if (process.server) {
      config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
    }
    return config;
  },
  error => {
    console("错误的传参");
    return Promise.reject(error);
  }
);
_http.interceptors.response.use(
  res => {
    return res;
  },
  ({ response }) => {
    // 过滤权限不足导致的服务器异常处理
    console.log('response.error')
    return Promise.reject(response);
  }
);

function setConfig(config) {
  config.data = config.data || {};
  Object.keys(config.data).forEach(key => {
    config.data[key] == undefined ? delete config.data[key] : "";
  });
  let newTimer = Date.now().toString(),
    code = md5(newTimer + "9527" + newTimer.substr(0, 6));
  //设置公用参数
  config.data.timestamp = newTimer;
  config.data.code = code;
  config.data.platform = "web_app";

  if (config.data.language) {
    const language = config.data.language;

    let newlanguage = language.split("_");
    newlanguage[1] = newlanguage[1].toUpperCase();
    newlanguage = newlanguage.join("_");
    config.data.language = newlanguage;
  } else {
    config.data.language = "zh_CN"
  }

  process.env.ENV_CONFIG === "prod" ? "" : (config.data.debug = "ico");
  if (config.method === "post") {
    config.data  = qs.stringify(config.data)
  } else {
    config.url = config.url + "?";
    config.url += qs.stringify(config.data)
  }
}


export default {
  post(url, data) {
    return _http({
      method: "post",
      url: url,
      data: data,
      mode: "cros",
      timeout: 20000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    });
  },
  get(url, data) {
    return _http({
      method: "get",
      url: url,
      data,
      mode: "cros",
      timeout: 20000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    });
  }
};
