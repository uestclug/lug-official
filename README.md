# nu-official

Official page of Netunion. Frontend pages only.

## Write blog and news

See this [document](./assets/How%20to%20Write%20Blog%20and%20News.md).

Or you can just imitate well-written [blog](./src/docs/blog) and [news](./src/docs/news).

## Todo list

- [ ] Netunion design icons.
- [ ] Git projects display page.
- [ ] About page.
- [ ] Netunion members palace page.
- [ ] Recruit page.

## Project setup

``` shell
yarn install
```

### Compiles and hot-reloads for frontend development

``` shell
yarn serve
```

### Compiles and minifies for production

``` shell
yarn build
```

### Compiles and minifies for Github Pages

Run `deploy.sh`.

#### Note

The differences between `Compiles and minifies for Github Pages` and `Compiles and minifies for production` are `publicPath` and `outputDir` settings. You can find them in [vue.config.js](./vue.config.js).

### Lints and fixes files

``` shell
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Version

Year.Month-B(eta)/S(table) (Number)-FRONTEND

Example:

``` js
// .env
VUE_APP_VERSION_CODE=20.10-S1-FRONTEND
```
