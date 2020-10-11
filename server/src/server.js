require('dotenv').config();
import "@babel/polyfill";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import spotify from './config/spotify';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/login', (req, res) => {
  const url = spotify.wrapper.createAuthorizeURL(spotify.scopes);
  res.json({ url });
})

app.post('/exchange-token', async (req, res, next) => {
  try {
    const token = await spotify.wrapper.authorizationCodeGrant(req.body.code);
    res.json({ access_token: token.body.access_token });
  } catch(error) {
    next(error);
  }
});

app.post('/top-tracks', async (req, res, next) => {
  try {
    spotify.wrapper.setAccessToken(req.body.token);
    const topTracks = await spotify.wrapper.getMyTopTracks({ time_range: req.body.timePeriod, limit: 50 });
    res.json({ items: topTracks.body.items });
  } catch(error) {
    next(error);
  }
});

// Error handler
app.use( async(err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err });
  throw err;
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${process.env.PORT || 3000}`);
})