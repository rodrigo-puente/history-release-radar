import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

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
