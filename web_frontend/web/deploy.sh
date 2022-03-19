#!/usr/bin/env sh

set -e

npm run build


cd ~/Desktop/deploy_vue_app/bot 
rm -rf !(".git")

cd /var/www/inst_mono/web_frontend/web
#cp -R dist/* /home/pi/Desktop/deploy_vue_app/

cd ~/Desktop/deploy_vue_app/bot 

git add .
git commit -m 'deploy'

git push -f git@github.com:helltf/bot.git main:gh-pages

cd -