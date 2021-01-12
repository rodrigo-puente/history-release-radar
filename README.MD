# RELEASE RADAR

Want to find out how old your top tracks are?

Be my guest. For development:

- You need docker and docker-compose
- Create a Spotify app and set the REDIRECT_URL to `http://localhost:8080/auth/callback`
- Add your SPOTIFY_CLIENT_ID & SPOTIFY_CLIENT_SECRET on the `docker-compose.development.yaml` file
- Run `docker-compose -f docker-compose.dev.yaml up --build ` inside the root of the repo.
- Navigate to `localhost:8080`
- Sign in with your Spotify credentials and find out your stats.

For production:

- You need docker and docker-compose
- Create a Spotify app and set the REDIRECT_URL to the URL you will resolve to
- Complete the necesary info on the `example.env` file and rename it to `.env`
- Upload both the `.env` file and the `docker-compose.production.yaml` to your server
- Run `docker-compose -f docker-compose.production.yaml up --build` 
- Configure NGINX to resolve each app
- Navigate to the URL and sign in with your Spotify credentials and find out your stats