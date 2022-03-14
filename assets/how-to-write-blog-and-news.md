**English** | [简体中文](./how-to-write-blog-and-news-zh.md)

# How to Write Blog and News

This simple document will tell you how to write blog and news.

[toc]

## Blog

The blog consists of two parts: blog info and blog content.

The blog info stores the basic information of the blog, which will be rendered on the front page. The blog content is the main text of the blog.

Blog files are stored in path: `/src/docs/blog`.

### Blog Info

You need to place the blog info at the **beginning** of the post and frame it with two `---`.

The blog info is written in the following manner.

``` md
---
title: BLOG TITLE
date: YYYY-MM-DD
author: AUTHOR NAME
tags: TAG1#TAG2#TAG3
location: RELATED LOCATION
link: RELATED LINK
---
```

| Attribute  | Value                           | Format           | Required | Note                                                                                                                                   |
| ---------- | ------------------------------- | ---------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `title`    | Title of blog                   |                  | Yes      |
| `date`     | Date of blog                    | `YYYY-MM-DD`     | Yes      | The blog will be sorted by the `date` attribute from new to old. If the attributes are the same, the blog will be sorted by file name. |
| `author`   | Author of blog                  |
| `tags`     | Tags of blog, use `#` to divide | `TAG1#TAG2#TAG3` |          | If the `tags` attribute is not filled in, the blog will be given the default tag: `not archived`.                                      |
| `location` | Related loaction of blog        |
| `link`     | Related web link of blog        | `http(s)://link` |

The `tags` attribute of blog allows you to add as many tags as you want to blog for archiving or retrieval.

### Blog Content

Blog content needs to be written below the blog info.

Feel free to use the `md` syntax to write whatever you want!

### Blog Sample

Here is a simple [blog sample](./sample-blog.md).

## News

The news also consists of two parts: news info and news content.

The news info stores the basic information of the news, which will be rendered on the front page. The news content is the main text of the news.

News files are stored in path: `/src/docs/news`.

### News Info

You need to place the news info at the **beginning** of the post and frame it with two `---`.

The news info is written in the following manner.

``` md
---
title: NEWS TITLE
date: YYYY-MM-DD
author: AUTHOR NAME
tag: TAG
accent: ACCENT GRADE
location: RELATED LOCATION
link: RELATED LINK
---
```

| Attribute  | Value                    | Format                                      | Required | Note                                                                                                                                   |
| ---------- | ------------------------ | ------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `title`    | Title of news            |                                             | Yes      |
| `date`     | Date of news             | `YYYY-MM-DD`                                | Yes      | The news will be sorted by the `date` attribute from new to old. If the attributes are the same, the news will be sorted by file name. |
| `author`   | Author of news           |                                             |
| `tag`      | Tag of news              | Reference [preset value](#newsTagValues)    |          | If the `tag` attribute is not filled in, the news will use the default tag: `news`.                                                    |
| `accent`   | Accent grade of news     | Reference [preset value](#newsAccentValues) |          | If the `accent` attribute is not filled in, the news will use the default emphasis level: `info`.                                      |
| `location` | Related loaction of news |
| `link`     | Related web link of news | `http(s)://link`                            |

Note that, unlike the `tags` attribute of blog, news uses the `tag` attribute, **which can only be filled with one tag**; and the value of the `tag` attribute of news is fixed, if it is not one of the preset values, it will be parsed as `news`.

<span id="newsTagValues">The news `tag` attribute has the following preset values.

- `mirrors`，即电子科技大学开源 `镜像站`。
- `iptv`，即电子科技大学的 `IPTV` 网站。
- `repair`，即电子科技大学宿舍 `网络报修` 系统。
- `markdown`，即由电子科技大学 Linux 用户组提供的 `在线文档` 系统。
- `minecraft`，即由电子科技大学 Linux 用户组建立并维护的 `我的世界` 服务器。
- `catroom`，即由电子科技大学 NetUnion 团队开发的 `Cat Room` 留言板。
- `sso`，即面向 NetUnion 及电子科技大学 Linux 用户组成员的 `SSO` 统一身份验证平台。
- `nuofficial`，电子科技大学 NetUnion 官网，即 `此网站`。

Similarly, the `accent` attribute of the news fills in any value that is not one of the preset values, will be resolved to `info`.

<span id="newsAccentValues">The news `accent` attribute has the following preset values.</span>

- `info`，代表**日常**的新闻公告，或用语气词 `嗯哼` 表示。
- `accent`，代表**值得关注**的新闻公告，通常为好事儿，或用语气词 `哇喔` 表示。
- `warning`，代表**可能令人担忧**的新闻公告，或用语气词 `奥不` 表示。
- `error`，代表**可能令人很不愉快**的新闻公告，或用语气词 `天哪` 表示。

### News Content

News content needs to be written below the News info.

Feel free to use the `md` syntax to write whatever you want!

### News Sample

Here is a simple [news sample](./sample-news.md).

## Pictures

It is recommended that image files be stored in the `assets/pic` directory and referenced by copying the image address.

``` md
![description of pic](https://github.com/uestclug/lug-official/blob/frontend/assets/pic/tweet/pic?raw=true)
```

## Issues

- [x] ~~属性在 `:` 后的赋值超过一个空格时，**额外的空格**会被视为属性值的一部分。例如填写 'title:&nbsp;&nbsp;News-Title', 会将 `title` 属性解析为 '&nbsp;News-Title', 而非我们通常希望的 'News-Title'.~~
- [x] ~~请确保编写的 `md` 源文件的行尾序列为 `LF` 格式，否则可能导致 `mdParser` 解析错误。~~
- [x] ~~请勿在博客或新闻信息中使用连续三个或以上的 `-` 符号，避免信息读取失败。~~

## Advanced

Function in [mdParser.js](../src/utils/mdParser.js) shows how we parse those `.md` files to objects.

We use [markdown-it](https://github.com/markdown-it/markdown-it) to render the parsed objects, if you are still not satisfied with the existing content support, you can refer to the official documentation to add more plugins!

You can define more `tag` preset values of news tags in [this file](../src/utils/index.js).

[NewsList.vue](../src/components/Home/NewsList.vue) and [BlogList.vue](../src/components/Home/BlogList.vue) are components that display news and blogs at **HOME** route.

[BlogTweets.vue](../src/components/Blog/BlogTweets.vue) and [BlogNavigation.vue](../src/components/Blog/BlogNavigation.vue) are components that display blogs and blog navigation at **BLOG** route.
