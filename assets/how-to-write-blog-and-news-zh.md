[English](how-to-write-blog-and-news.md) | **简体中文**

# 如何撰写博客和新闻

这篇简单的文档可以帮助你撰写适用于 NetUnion 官网的博客与新闻。

[toc]

## 撰写博客

博客包括博客信息和博客内容两部分。

博客信息存储此篇博客的基本信息，将渲染到前端页面上。博客内容则是正文。

博客文件存放在 `/src/docs/blog` 目录下。

### 博客信息

您需要将博客信息的内容放在文章的**开头部分**，并且用两个 `---` 将它们框住。

博客信息的编写方式如下所示。

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

| 属性       | 内容                                  | 格式要求         | 必要 | 注释                                                                 |
| ---------- | ------------------------------------- | ---------------- | ---- | -------------------------------------------------------------------- |
| `title`    | 博客的标题                            |                  | Yes  |
| `date`     | 博客的对应日期                        | `YYYY-MM-DD`     | Yes  | 博客将按 `date` 属性按从新到旧排序。若属性相同，则会依据文件名排序。 |
| `author`   | 博客的撰写者                          |
| `tags`     | 博客的标签，请使用 `#` 将不同标签隔开 | `TAG1#TAG2#TAG3` |      | 若不填写 `tags` 属性，则博客会被添加默认标签：`未归档`。             |
| `location` | 与博客相关的物理地址                  |
| `link`     | 与博客相关的网页链接                  | `http(s)://link` |

通过博客的 `tags` 属性，您可以为博客添加任意多个标签，用于归档或检索。

### 博客内容

博客内容需要编写在博客信息的下方。

随心所欲地使用 `md` 语法进行撰写吧！

### 博客撰写示例

这是一个简单的[博客撰写示例](./sample-blog.md)。

## 撰写新闻

新闻同样包括新闻信息和新闻内容两部分。

新闻信息存储此篇新闻的基本信息，将渲染到前端页面上。新闻内容则是正文。

新闻文件存放在 `/src/docs/news` 目录下。

### 新闻信息

您需要将新闻信息的内容放在文章的**开头部分**，并且用两个 `---` 将它们框住。

新闻信息的编写方式如下所示。

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

| 属性       | 内容                 | 格式要求                                | 必要 | 注释                                                                 |
| ---------- | -------------------- | --------------------------------------- | ---- | -------------------------------------------------------------------- |
| `title`    | 新闻的标题           |                                         | Yes  |
| `date`     | 新闻的对应日期       | `YYYY-MM-DD`                            | Yes  | 新闻将按 `date` 属性按从新到旧排序。若属性相同，则会依据文件名排序。 |
| `author`   | 新闻的撰写者         |                                         |
| `tag`      | 新闻的标签           | 参考[新闻标签预设值](#newsTagValues)    |      | 若不填写 `tag` 属性，则新闻会使用默认标签：`新闻公告`。              |
| `accent`   | 新闻的强调等级       | 参考[新闻强调预设值](#newsAccentValues) |      | 若不填写 `accent` 属性，则新闻会使用默认强调等级：`嗯哼`。           |
| `location` | 与新闻相关的物理地址 |
| `link`     | 与新闻相关的网页链接 | `http(s)://link`                        |

需要注意的是，与博客的 `tags` 属性不同，新闻使用 `tag` 属性，**只能填写一个标签**；且新闻的 `tag` 属性的值是固定的，如果不属于预设值的一种，都会被解析为 `新闻公告`。

<span id="newsTagValues">新闻的 `tag` 属性预设值有：</span>

- `mirrors`，即电子科技大学开源 `镜像站`。
- `iptv`，即电子科技大学的 `IPTV` 网站。
- `repair`，即电子科技大学宿舍 `网络报修` 系统。
- `markdown`，即由电子科技大学 Linux 用户组提供的 `在线文档` 系统。
- `minecraft`，即由电子科技大学 Linux 用户组建立并维护的 `我的世界` 服务器。
- `catroom`，即由电子科技大学 NetUnion 团队开发的 `Cat Room` 留言板。
- `sso`，即面向 NetUnion 及电子科技大学 Linux 用户组成员的 `SSO` 统一身份验证平台。
- `nuofficial`，电子科技大学 NetUnion 官网，即 `此网站`。

同样，新闻的 `accent` 属性填写的值如果不属于预设值的一种，都会解析为 `嗯哼`。

<span id="newsAccentValues">新闻的 `accent` 属性预设值有：</span>

- `info`，代表**日常**的新闻公告，或用语气词 `嗯哼` 表示。
- `accent`，代表**值得关注**的新闻公告，通常为好事儿，或用语气词 `哇喔` 表示。
- `warning`，代表**可能令人担忧**的新闻公告，或用语气词 `奥不` 表示。
- `error`，代表**可能令人很不愉快**的新闻公告，或用语气词 `天哪` 表示。

### 新闻内容

新闻内容需要编写在新闻信息的下方。

随心所欲地使用 `md` 语法进行撰写吧！

### 新闻撰写示例

这是一个简单的[新闻撰写示例](./sample-news.md)。

## 引用图片

建议将图片文件存放在 `assets/pic` 目录下，通过复制图片地址的方式引用。

``` md
![图片的描述信息](https://github.com/uestclug/lug-official/blob/frontend/assets/pic/tweet/pic?raw=true)
```

## 已知问题（特性）

- [x] ~~属性在 `:` 后的赋值超过一个空格时，**额外的空格**会被视为属性值的一部分。例如填写 'title:&nbsp;&nbsp;News-Title', 会将 `title` 属性解析为 '&nbsp;News-Title', 而非我们通常希望的 'News-Title'.~~
- [x] ~~请确保编写的 `md` 源文件的行尾序列为 `LF` 格式，否则可能导致 `mdParser` 解析错误。~~
- [x] ~~请勿在博客或新闻信息中使用连续三个或以上的 `-` 符号，避免信息读取失败。~~

## 了解源码

文件 [mdParser.js](../src/utils/mdParser.js) 中的函数帮助我们解析 `.md` 文件为对象。

我们采用 [markdown-it](https://github.com/markdown-it/markdown-it) 渲染解析后的对象，如果您对已有的内容支持仍不满意，可以参考其官方文档自行添加插件！

您可以编写[这个文件](../src/utils/index.js)中的函数，以定义更多新闻的 `tag` 属性的预设值。

组件 [NewsList.vue](../src/components/Home/NewsList.vue) 和 [BlogList.vue](../src/components/Home/BlogList.vue) 展示了**主页**的新闻和博客内容。

组件 [BlogTweets.vue](../src/components/Blog/BlogTweets.vue) 和 [BlogNavigation.vue](../src/components/Blog/BlogNavigation.vue) 展示了**博客页**的内容和侧栏导航。
