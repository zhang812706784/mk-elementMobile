import axios from 'axios';
console.log(process.env)
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 1000
});
// 请求接口
service.interceptors.request.use(config => {
    // 发送请求前
    if (config.method === "get") {
      let url = config.url
      config.url = url.indexOf("?") > -1 ? `${url}&${new Date().getTime()}` : `${url}?${new Date().getTime()}`
    }
    return config
  }, error => {
    // 请求失败
    Promise.reject(error)
  });
  
  // 返回接口
  service.interceptors.response.use(
    response => {
      const res = response.data;
      return res
    },
  
    // 服务器的状态码不是2开头的情况
    // 根据返回的状态码进行一些操作，例如登录过期提示，错误提示
    error => {
      return Promise.reject(error.response)
    }
  );
export default service;
