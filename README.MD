# RELEASE RADAR

Want to find out how old your top tracks are?

Be my guest:

- You need docker and docker-compose.
- You need to create a Spotify app and set a callback URL to `http://localhost:8080/auth/callback`
- Add your SPOTIFY_CLIENT_ID & SPOTIFY_CLIENT_SECRET on the `docker-compose.dev.yaml` file.
- Run `docker-compose -f docker-compose.dev.yaml up --build ` inside the repo.
- Navigate to `localhost:8080`
- Sign in with your Spotify Credentials and find out your stats.