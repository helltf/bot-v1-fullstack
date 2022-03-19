#!/bin/bash

set -e

npm run build


cd ~/Desktop/deploy_vue_app/

find ./bot -mindepth 1 -name .git -prune -o -exec rm -rf {} +

cd /var/www/inst_mono/web_frontend/web

cp -R dist/* /home/pi/Desktop/deploy_vue_app/bot

cd ~/Desktop/deploy_vue_app/bot 

git add -A
git commit -m 'deploy'

git push -f git@github.com:helltf/bot.git main:gh-pages

cd -