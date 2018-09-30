import $http from "../utils/http";

let apiBase = "", dataBase = "";
if (process.env.VUE_APP_ENV_CONFIG === "prod") {
  // apiBase = "https://open.api.mytoken.io"
  apiBase = "https://wallet-hz.mytokenapi.com"
} else {
  apiBase = "https://wallet-hz.mytokenapi.com"
}
const creatQueryUrl = url => {
  return  process.env.VUE_APP_ENV_CONFIG === 'dev' ?  `/walletapi${url}`:  `${apiBase}${url}`;
};
const API = {
  // https://open.api.mytoken.io/wallet/gasinfo
  walletGasinfo: creatQueryUrl('/wallet/gasinfo'),
  currencyPrices: creatQueryUrl('/currency/prices')
  
};
export { apiBase, dataBase };
export default API;

export const walletGasinfo = (params={}) => {
  return $http.get(API.walletGasinfo, params);
}

export const currencyPrices = (params={}) => {
  return $http.get(API.currencyPrices, params);
}

