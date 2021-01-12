import axios from 'axios';
import { API_URL } from '@/app.config';

axios.defaults.baseURL = API_URL;

export default {
  async getLoginUrl() {
    const response = await axios.get('/login');
    return response.data;
  },
  async getToken(code) {
    const response = await axios.post('/exchange-token', { code });
    return response.data;
  },
  async getTopTracks(token, timePeriod) {
    const response = await axios.post('/top-tracks', { token, timePeriod });
    return response.data;
  },
};
