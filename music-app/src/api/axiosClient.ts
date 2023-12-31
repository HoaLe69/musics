import axios, { AxiosResponse } from "axios";
import queryString from "query-string";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error: any) => {
    throw error;
  },
);
export default axiosClient;
