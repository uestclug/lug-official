# nu-official

Official page of Netunion. Frontend pages only.

## Write blog and news

See this [document](./docs/How%20to%20Write%20Blog%20and%20News.md).

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

The differences between `Compiles and minifies for Github Pages` and `Compiles and minifies for production` are `publicPath` and `outputDir` settings. You can find them in [vue.config.js](./vue.config.js).

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

Year.Month-B(eta)/S(table) (Number)-FRONTEND

Example:

``` js
// .env
VUE_APP_VERSION_CODE=20.10-S1-FRONTEND
```
