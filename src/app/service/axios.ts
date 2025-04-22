import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${typeof window !== 'undefined' ? window.location.origin : ''}/api`,
});
