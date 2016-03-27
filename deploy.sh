#/bin/bash
git config --global user.name "CI"
git config --global user.email "ci@egoistian.com"
node ./replace-url.js
rm -rf .deploy_git/
./node_modules/.bin/hexo clean
./node_modules/.bin/hexo generate
./node_modules/.bin/hexo deploy
