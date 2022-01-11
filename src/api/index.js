import { http } from "../utils/http";

export const API = {
  GetBanner() {
    return http.get("/banner");
  },
};
