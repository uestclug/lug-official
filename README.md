# nu-official

Official page of Netunion.

## Todo list

- [ ] 招新简历投递。
- [ ] 招新了解更多单页。
- [ ] CAT ROOM 留言板。在 [fishroom](https://fishroom.tuna.moe/log/tuna/today) 基础上充分改进。

## Project setup

``` yarn
yarn install
```

### Compiles and hot-reloads for frontend development

``` yarn
yarn serve
```

### Compiles and hot-reloads for full-stack development

To start backend serve, see [nu-official-backend](https://github.com/uestclug/nu-official-backend).

``` yarn
yarn fullstack
```

### Compiles and minifies for production

Modify `.env` settings.

``` .env
VUE_APP_GITHUB_OAUTH_CLIENT_ID='YOUR_GITHUB_OAUTH_CLIENT_ID'
VUE_APP_GITHUB_OAUTH_CLIENT_REDIRECT_URL='http://YOUR_GITHUB_OAUTH_CLIENT_REDIRECT_URL/oauth/redirect'
```

You should make sure the `VUE_APP_GITHUB_OAUTH_CLIENT_ID` setting is consistent with the backend.

``` yarn
yarn build
```

### Lints and fixes files

``` yarn
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
