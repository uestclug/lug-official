# nu-official

Official page of Netunion.

## Todo list

- [ ] 更换为 Netunion 设计的 icons.
- [ ] 招新简历投递通道。
- [ ] CAT ROOM 留言板。在 [fishroom](https://fishroom.tuna.moe/log/tuna/today) 基础上充分改进。
- [ ] 切换路由时，取消之前路由的请求。

## Project setup

``` shell
yarn install
```

### Compiles and hot-reloads for frontend development

``` shell
yarn serve
```

### Compiles and hot-reloads for full-stack development

To start backend serve, see [nu-official-backend](https://github.com/uestclug/nu-official-backend).

``` shell
yarn fullstack
```

### Compiles and minifies for production

Modify `.env` settings.

``` .env
VUE_APP_GITHUB_OAUTH_CLIENT_ID='YOUR_GITHUB_OAUTH_CLIENT_ID'
VUE_APP_GITHUB_OAUTH_CLIENT_REDIRECT_URL='http://YOUR_GITHUB_OAUTH_CLIENT_REDIRECT_URL/oauth/redirect'
```

You should make sure the `VUE_APP_GITHUB_OAUTH_CLIENT_ID` setting is consistent with the backend.

``` shell
yarn build
```

### Compiles and minifies for Github Pages

#### Method 1

Run `deploy.sh`.

#### Method 2

For better address bar display, the project uses **HTML5 History Mode**. So you need to manually copy an identical `404.html` file with `index.html`. see [HTML5 History Mode](https://router.vuejs.org/guide/essentials/history-mode.html).

``` shell
yarn build--github-pages
cd ./docs
cp index.html 404.html
```

Push files in `/docs` to [uestclug.github.io](https://github.com/uestclug/uestclug.github.io).

### Lints and fixes files

``` shell
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Version

Year.Month-B(eta)/S(table) (Number)

Example:

``` js
// .env
VUE_APP_VERSION_CODE=20.10-B1
```
