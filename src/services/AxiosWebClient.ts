import axios from 'axios';

const API_URI = import.meta.env.VITE_API_URL;

const axiosWebClient = axios.create({ baseURL: API_URI });
export default axiosWebClient;
