import axios from "axios";
import { toast } from "react-toastify";
import { getStore, setStore, isExpired, APP_AUTH } from "../utils/auth";
// import { store } from "../store";
import { signOut, setErrorStatus } from "../store/slices/authSlice";
// import { matchPathCallback } from '../utils/history'
// import { authRoutes } from "../routers/routesConfig";

// let httpCode = {
//   // 这里我简单列出一些常见的http状态码信息，可以自己去调整配置
//   400: '请求参数错误',
//   401: '权限不足, 请重新登录',
//   403: '服务器拒绝本次访问',
//   404: '请求资源未找到',
//   500: '内部服务器错误',
//   501: '服务器不支持该请求中使用的方法',
//   502: '网关错误',
//   504: '网关超时',
// }

// 刷新 accessToken 的接口

// const autoSignOut = () => {
//   store.dispatch(signOut());
//   matchPathCallback({
//     routes: authRoutes,
//     noMatch: (history) => {
//       setStore(APP_AUTH.REDIRECT_AFTER_SIGNIN, history.location?.pathname);
//       return history.replace("/signin");
//     },
//   });
// };

const refreshToken = () =>
  new Promise((resolve, reject) => {
    instance
      .get("/refreshToken", {
        params: { refreshToken: getStore("refreshToken") },
      })
      .then((res) => {
        const { token, refreshToken, expire, refreshExpire } = res.data;
        setStore("token", token, expire);
        setStore("refreshToken", refreshToken, refreshExpire);
        resolve(res.data);
      })
      .catch((err) => {
        // autoSignOut()
        reject(err);
      });
  });

// 创建 axios 实例
const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "http://43.143.105.147:28090/api/v1/app",

  timeout: 30000,
  // withCredentials: true,
  // transformRequest: [(data) => JSON.stringify(data.data)],
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },
});

// 忽略规则
const verify = {
  token: ["/auth"],
};

// 请求队列
let requests = [];

// Token 是否刷新中
let isRefreshing = false;

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 设置为ON coding Mock API 将自动为您生成一组 Fake 数据
    // config.headers['X-Coding-Mock-Response-Fake'] = 'On'
    // 可以根据业务需求插入对应逻辑
    // 如果是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob
    if (config.url.includes("pur/contract/export")) {
      config.headers["responseType"] = "blob";
    }
    // 如果是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
    if (config.url.includes("pur/contract/upload")) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    // header api key for postman mock server
    // if (process.env.NODE_ENV === 'mock') config.headers['x-api-key'] = process.env.REACT_APP_POSTMAN_API_KEY

    const token = getStore("token") || "";
    if (config.url && verify.token.some((e) => config.url.includes(e))) {
      if (!token) {
        // autoSignOut()
        return config;
      }
      config.headers["Authorization"] = token;
    }

    if (token) {
      if (config.url.includes("refreshToken")) {
        return config;
      }
      // 判断 token 是否过期
      if (isExpired("token")) {
        // 判断 refreshToken 是否过期
        if (isExpired("refreshToken")) {
          // autoSignOut()
          return config;
        }
        // 是否在刷新中

        if (!isRefreshing) {
          isRefreshing = true;
          refreshToken().then((res) => {
            requests.forEach((cb) => cb(res.token));
            requests = [];
            isRefreshing = false;
          });
        }

        return new Promise((resolve) => {
          // 继续请求
          requests.push((token) => {
            // 重新设置 token
            config.headers["Authorization"] = token;
            resolve(config);
          });
        });
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    // store.dispatch(setErrorStatus(null))
    if (!res.data) return res;
    if (typeof res.data === "string") return res.data;
    const { code, message } = res.data;
    switch (code) {
      case 1000:
        return res.data;
      default:
        toast.error(message);
        return Promise.reject(message);
    }
  },
  async (error) => {
    let errorStatus = "";

    if (error.response) {
      const { status, config, data } = error.response;
      data?.message && toast.error(data?.message);

      switch (status) {
        case 401:
          // autoSignOut()
          return Promise.reject(error.message);
        case 403:
          // if (isDev) {
          //   Message.error(`${config.url} 无权限访问！！`)
          // } else {
          //   history.replace('/403')
          // }
          break;
        case 404:
          break;
        case 500:
          // if (!isDev) {
          //   history.replace('/500')
          // }
          break;

        case 502:
          // if (isDev) {
          //   Message.error(`${config.url} 服务异常！！`)
          // } else {
          //   history.replace('/502')
          // }
          break;

        default:
          console.error(status, config.url);
          break;
      }
      errorStatus = status;
    } else {
      errorStatus = 5000;
      toast.error("Network Error");
    }
    // store.dispatch(setErrorStatus(errorStatus))
    // matchPathCallback({
    //   routes: authRoutes,
    //   noMatch: (history) => history.push(`/error/${errorStatus}`),
    // })

    return Promise.reject(error.message);
  }
);

/**
 * get请求promise封装
 *
 * @param {*} url
 * @param {*} [params={}]
 * @param {boolean} [needToken=false]
 * @return {*}
 */
const Get = (url, params = {}, needToken = false) => {
  // setHeaderToken(needToken)
  return instance({
    url,
    method: "get",
    params,
  });
};

/**
 * post请求promise封装
 *
 * @param {*} url
 * @param {*} [params={}]
 * @param {boolean} [needToken=false]
 * @return {*}
 */
const Post = (url, params = {}, needToken = false) => {
  // setHeaderToken(needToken)
  return instance({
    url,
    method: "post",
    data: params,
  });
};

/**
 * downloadFile 文件下载
 *
 * @param {string} [url='http://go.api/download_file']
 * @param {boolean} [needToken=false]
 */
// const downloadFile = (url = 'http://api.dev/file-download', needToken = false) => {
//   // setHeaderToken(needToken)
//   const method = 'get'
//   // const url = 'http://go.api/download_file'
//   return instance({
//     url,
//     method,
//     responseType: 'blob', // important
//   })
//     .then(({ data }) => {
//       const downloadUrl = window.URL.createObjectURL(new Blob([data]))
//       const link = document.createElement('a')
//       link.href = downloadUrl
//       link.setAttribute('download', 'file.zip') // any other extension
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//     })
//     .catch((error) => {
//       console.log('error', error)
//     })
// }

export { Get, Post };
