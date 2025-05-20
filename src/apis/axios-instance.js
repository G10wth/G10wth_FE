import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// ✅ 요청마다 토큰을 자동으로 헤더에 추가
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
