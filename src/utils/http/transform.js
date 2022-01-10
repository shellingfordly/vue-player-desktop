import { checkStatus } from "./checkStatus";
import { ErrMsg } from "./errMessage";

// 返回值处理
export function transformRequestHook(res) {
  return res.data;
}

// 请求拦截处理
export function requestInterceptors(config) {
  return config;
}

// 响应正常处理
export function responseInterceptors(res) {
  return res;
}

// 响应错误处理
export function responseInterceptorsCatch(error) {
  const { response, code, message } = error || {};
  const msg = response?.data?.title ?? "";
  const err = error?.toString?.() ?? "";
  let errMessage = "";
  try {
    if (code === "ECONNABORTED" && message.indexOf("timeout") !== -1) {
      errMessage = ErrMsg.apiTimeoutMessage;
    }
    if (err?.includes("Network Error")) {
      errMessage = ErrMsg.networkExceptionMsg;
    }

    if (errMessage) {
      alert({
        type: "danger",
        message: errMessage,
      });
      return Promise.reject(error);
    }
  } catch (e) {
    throw new Error(e);
  }
  checkStatus(error?.response?.status, msg);
  return Promise.reject(error);
}
