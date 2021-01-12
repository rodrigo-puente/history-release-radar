#!/bin/sh

ROOT_DIR=/usr/share/nginx/html

# Replace env vars in JavaScript files
echo "Replacing env constants in JS"
for file in $ROOT_DIR/js/app.*.js* $ROOT_DIR/index.html $ROOT_DIR/precache-manifest*.js;
do
    echo "Processing $file ...";
    sed -i 's|REDIRECT_URL|'${REDIRECT_URL}'|g' $file 
    sed -i 's|SPOTIFY_CLIENT_ID|'${SPOTIFY_CLIENT_ID}'|g' $file 
    sed -i 's|SPOTIFY_CLIENT_SECRET|'${SPOTIFY_CLIENT_SECRET}'|g' $file 
    sed -i 's|PORT|'${PORT}'|g' $file 
done
