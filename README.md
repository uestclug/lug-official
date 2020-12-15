# nu-official

Official page of Netunion. Frontend pages only.

## Write blog and news

See this [document](./assets/How%20to%20Write%20Blog%20and%20News.md).

Or you can just imitate well-written [blog](./src/docs/blog) and [news](./src/docs/news).

## Become the one in members palace

Display your information on the members palace page, see this [document](./assets/Add%20Your%20Info%20to%20Member%20Palace.md).

## Todo list

### Feature

- [ ] Netunion design icons.
- [ ] Open source projects display page.
- [x] Netunion members palace page.
- [ ] Recruit page.

### Known issues

- [x] Better tweet preview.
- [ ] Image cache.

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for frontend development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Compiles and minifies for Github Pages

```bash
deploy.sh
```

#### Note

The differences between `Compiles and minifies for Github Pages` and `Compiles and minifies for production` are `publicPath` and `outputDir` settings. You can find them in [vue.config.js](./vue.config.js).

### Lints and fixes files

```bash
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

Want to know more about website change infomation? See our [Changelog](./CHANGELOG.md).
