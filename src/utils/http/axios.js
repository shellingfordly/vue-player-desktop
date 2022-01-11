import axios from "axios";
import {
  transformRequestHook,
  requestInterceptors,
  responseInterceptors,
  responseInterceptorsCatch,
} from "./transform";

export class Http {
  constructor(options) {
    this.instance = axios.create(options);
    this.setupInterceptors();
  }

  createHttp(config) {
    this.instance = axios.create(config);
  }

  setupInterceptors() {
    // 请求拦截处理
    this.instance.interceptors.request.use(requestInterceptors, undefined);
    this.instance.interceptors.request.use(undefined, () => {});
    // 响应拦截处理
    this.instance.interceptors.response.use(responseInterceptors, undefined);
    this.instance.interceptors.response.use(
      undefined,
      responseInterceptorsCatch
    );
  }

  getHttp() {
    return this.instance;
  }

  configHttp(config) {
    if (!this.instance) {
      return;
    }
    this.createHttp(config);
  }

  setHeader(headers) {
    if (!this.instance) {
      return;
    }

    Object.assign(this.instance.defaults.headers, headers);
  }

  get(url) {
    return this.request({
      url,
      method: "GET",
    });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((result) => {
          const res = transformRequestHook(result);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
