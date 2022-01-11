import { Http } from "./axios";

function createHttp(opt) {
  return new Http({
    baseURL: "http://localhost:3300",
    ...opt,
  });
}

export const http = createHttp();
