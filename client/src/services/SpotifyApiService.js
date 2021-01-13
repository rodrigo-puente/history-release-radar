import axios from 'axios';
import cachios from 'cachios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
const cachiosInstance = cachios.create(axios);

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
    const response = await cachiosInstance.post('/top-tracks', { token, timePeriod }, { ttl: 3600 });
    return response.data;
  },
};
