// Đây là file cấu hình API Client mẫu (ví dụ: dùng Axios hoặc Fetch API)
// Sẵn sàng để tích hợp Backend thực tế
import { APP_CONFIG } from "../config/constants";

export const apiClient = {
  get: async (endpoint: string) => {
    // const response = await fetch(`${APP_CONFIG.API_URL}${endpoint}`);
    // return response.json();
    console.log(`GET ${APP_CONFIG.API_URL}${endpoint}`);
    return Promise.resolve({ data: [] });
  },
  post: async (endpoint: string, data: any) => {
    console.log(`POST ${APP_CONFIG.API_URL}${endpoint}`, data);
    return Promise.resolve({ success: true, data });
  },
  put: async (endpoint: string, data: any) => {
    console.log(`PUT ${APP_CONFIG.API_URL}${endpoint}`, data);
    return Promise.resolve({ success: true, data });
  },
  delete: async (endpoint: string) => {
    console.log(`DELETE ${APP_CONFIG.API_URL}${endpoint}`);
    return Promise.resolve({ success: true });
  }
};
