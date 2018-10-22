import $http from "../utils/http";


export async function rongCloundRegister(params = {}) {
  console.log(process.env.APP_HOST)
  return $http.get('http://127.0.0.1:7001/api/v1/rongclound/token', params)
}