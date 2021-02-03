# How to Write Blog and News / 如何撰写博客和新闻

This simple document will tell you how to write blog and news.

这篇简单的文档可以帮助你撰写适用于 NetUnion 官网的博客与新闻。

[toc]

## Blog / 撰写博客

The blog consists of two parts: blog info and blog content.

The blog info stores the basic information of the blog, which will be rendered on the front page. The blog content is the main text of the blog.

Blog files are stored in path: `/src/docs/blog`.

博客包括博客信息和博客内容两部分。

博客信息存储此篇博客的基本信息，将渲染到前端页面上。博客内容则是正文。

博客文件存放在 `/src/docs/blog` 目录下。

### Blog Info / 博客信息

You need to place the blog info at the **beginning** of the post and frame it with two `---`.

The blog info is written in the following manner.

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

Attribute / 属性|Value / 内容|Format / 格式要求|Needed / 必要|Note / 注释
---|---|---|---|---
`title`|Title of blog / 博客的标题||Yes / 必要|
`date`|Date of blog / 博客的对应日期|`YYYY-MM-DD`|Yes / 必要|The blog will be sorted by the `date` attribute from new to old. If the attributes are the same, the blog will be sorted by file name. / 博客将按 `date` 属性按从新到旧排序。若属性相同，则会依据文件名排序。
`author`|Author of blog / 博客的撰写者|
`tags`|Tags of blog, use `#` to divide / 博客的标签，请使用 `#` 将不同标签隔开|`TAG1#TAG2#TAG3`||If the `tags` attribute is not filled in, the blog will be given the default tag: `not archived`. / 若不填写 `tags` 属性，则博客会被添加默认标签：`未归档`。
`location`|Related loaction of blog / 与博客相关的地址|
`link`|Related web link of blog / 与博客相关的网页链接|`http(s)://link`|

The `tags` attribute of blog allows you to add as many tags as you want to blog for archiving or retrieval.

通过博客的 `tags` 属性，您可以为博客添加任意多个标签，用于归档或检索。

### Blog Content / 博客内容

Blog content needs to be written below the blog info.

Feel free to use the `md` syntax to write whatever you want!

博客内容需要编写在博客信息的下方。

随心所欲地使用 `md` 语法进行撰写吧！

### Blog Sample / 博客撰写示例

Here is a simple [blog sample](./Sample%20Blog.md).

这是一个简单的[博客撰写示例](./Sample%20Blog.md)。

## News / 撰写新闻

The news also consists of two parts: news info and news content.

The news info stores the basic information of the news, which will be rendered on the front page. The news content is the main text of the news.

News files are stored in path: `/src/docs/news`.

新闻同样包括新闻信息和新闻内容两部分。

新闻信息存储此篇新闻的基本信息，将渲染到前端页面上。新闻内容则是正文。

新闻文件存放在 `/src/docs/news` 目录下。

### News Info / 新闻信息

You need to place the news info at the **beginning** of the post and frame it with two `---`.

The news info is written in the following manner.

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

Attribute / 属性|Value / 内容|Format / 格式要求|Needed / 必要|Note / 注释
---|---|---|---|---
`title`|Title of news / 新闻的标题||Yes / 必要
`date`|Date of news / 新闻的对应日期|`YYYY-MM-DD`|Yes / 必要|The news will be sorted by the `date` attribute from new to old. If the attributes are the same, the news will be sorted by file name. / 新闻将按 `date` 属性按从新到旧排序。若属性相同，则会依据文件名排序。
`author`|Author of news / 新闻的撰写者||
`tag`|Tag of news / 新闻的标签|Reference [preset value](#newsTagValues) / 参考[预设值](#newsTagValues)||If the `tag` attribute is not filled in, the news will use the default tag: `news`. / 若不填写 `tag` 属性，则新闻会使用默认标签：`新闻公告`。
`accent`|Accent grade of news / 新闻的强调等级|Reference [preset value](#newsAccentValues) / 参考[预设值](#newsAccentValues)||If the `accent` attribute is not filled in, the news will use the default emphasis level: `info`. / 若不填写 `accent` 属性，则新闻会使用默认强调等级：`嗯哼`。
`location`|Related loaction of news / 与新闻相关的地址|
`link`|Related web link of news / 与新闻相关的网页链接|`http(s)://link`|

Note that, unlike the `tags` attribute of blog, news uses the `tag` attribute, **which can only be filled with one tag**; and the value of the `tag` attribute of news is fixed, if it is not one of the preset values, it will be parsed as `news`.

需要注意的是，与博客的 `tags` 属性不同，新闻使用 `tag` 属性，**只能填写一个标签**；且新闻的 `tag` 属性的值是固定的，如果不属于预设值的一种，都会被解析为 `新闻公告`。

<span id="newsTagValues">The news `tag` attribute has the following preset values.

新闻的 `tag` 属性预设值有：</span>

- `mirrors`，即电子科技大学开源 `镜像站`。
- `iptv`，即电子科技大学的 `IPTV` 网站。
- `repair`，即电子科技大学宿舍 `网络报修` 系统。
- `markdown`，即由电子科技大学 Linux 用户组提供的 `在线文档` 系统。
- `minecraft`，即由电子科技大学 Linux 用户组建立并维护的 `我的世界` 服务器。
- `catroom`，即由电子科技大学 NetUnion 团队开发的 `Cat Room` 留言板。
- `nuofficial`，电子科技大学 NetUnion 官网，即 `此网站`。

Similarly, the `accent` attribute of the news fills in any value that is not one of the preset values, will be resolved to `info`.

同样，新闻的 `accent` 属性填写的值如果不属于预设值的一种，都会解析为 `嗯哼`。

<span id="newsAccentValues">The news `accent` attribute has the following preset values.

新闻的 `accent` 属性预设值有：</span>

- `info`，代表**日常**的新闻公告，或用语气词 `嗯哼` 表示。
- `accent`，代表**值得关注**的新闻公告，通常为好事儿，或用语气词 `哇喔` 表示。
- `warning`，代表**可能令人担忧**的新闻公告，或用语气词 `奥不` 表示。
- `error`，代表**可能令人很不愉快**的新闻公告，或用语气词 `天哪` 表示。

### News Content / 新闻内容

News content needs to be written below the News info.

Feel free to use the `md` syntax to write whatever you want!

新闻内容需要编写在新闻信息的下方。

随心所欲地使用 `md` 语法进行撰写吧！

### News Sample / 新闻撰写示例

Here is a simple [news sample](./Sample%20News.md).

这是一个简单的[新闻撰写示例](./Sample%20News.md)。

## Pictures / 引用图片

It is recommended that image files be stored in the `assets/pic` directory and referenced by copying the image address.

建议将图片文件存放在 `assets/pic` 目录下，通过复制图片地址的方式引用。

``` markdown
![pic](https://github.com/uestclug/nu-official/blob/frontend/assets/pic/tweet/pic?raw=true)
```

## Issues / 已知问题（特性）

- 属性在 `:` 后的赋值超过一个空格时，**额外的空格**会被视为属性值的一部分。例如填写 'title:&nbsp;&nbsp;News-Title', 会将 `title` 属性解析为 '&nbsp;News-Title', 而非我们通常希望的 'News-Title'.

## Advanced / 了解源码

Function in [mdParser.js](../src/utils/mdParser.js) shows how we parse those `.md` files to objects.

We use [markdown-it](https://github.com/markdown-it/markdown-it) to render the parsed objects, if you are still not satisfied with the existing content support, you can refer to the official documentation to add more plugins!

You can define more `tag` preset values of news tags in [this file](../src/utils/index.js).

[NewsList.vue](../src/components/Home/NewsList.vue) and [BlogList.vue](../src/components/Home/BlogList.vue) are components that display news and blogs at **HOME** route.

[BlogTweets.vue](../src/components/Blog/BlogTweets.vue) and [BlogNavigation.vue](../src/components/Blog/BlogNavigation.vue) are components that display blogs and blog navigation at **BLOG** route.

文件 [mdParser.js](../src/utils/mdParser.js) 中的函数帮助我们解析 `.md` 文件为对象。

我们采用 [markdown-it](https://github.com/markdown-it/markdown-it) 渲染解析后的对象，如果您对已有的内容支持仍不满意，可以参考其官方文档自行添加插件！

您可以编写[这个文件](../src/utils/index.js)中的函数，以定义更多新闻的 `tag` 属性的预设值。

组件 [NewsList.vue](../src/components/Home/NewsList.vue) 和 [BlogList.vue](../src/components/Home/BlogList.vue) 展示了**主页**的新闻和博客内容。

组件 [BlogTweets.vue](../src/components/Blog/BlogTweets.vue) 和 [BlogNavigation.vue](../src/components/Blog/BlogNavigation.vue) 展示了**博客页**的内容和侧栏导航。
