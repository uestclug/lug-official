#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build--github-pages

# cd 到构建输出的目录下 
cd ./docs

# 创建 404.html 文件
cp index.html 404.html

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://uestclug.github.io
git push -f git@github.com:uestclug/uestclug.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
