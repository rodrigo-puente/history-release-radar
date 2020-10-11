require('dotenv').config();

import spotifyWebApi from 'spotify-web-api-node';

const scopes = ['user-read-private', 'user-top-read'];
const spotifyWrapper = new spotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URL
})

export default {
  wrapper: spotifyWrapper,
  scopes
};