import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

export const getData = async (URL: string, config?: AxiosRequestConfig | FormData) => {
  try {
    const response = config
      ? await axiosInstance.post(URL, config)
      : await axiosInstance.get(URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
