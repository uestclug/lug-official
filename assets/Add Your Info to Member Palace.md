# 将你的信息添加到成员殿堂

这篇文档可以帮助你添加你的信息到 NetUnion 成员殿堂中。

[toc]

## 这是自愿的

所有 NetUnion 成员都可以将自己的信息展示到我们的官网上去。

这是联系不同届 NetUnion 成员的纽带，也是我们在成电留下的一些痕迹。

时过境迁，或许会有人喜欢你编写的一行行代码，找到你的故事。

您不一定非要这么做，这一切都是**自愿**的。

## 可以展示哪些信息

- 个性颜色
- 昵称
- 简介
- 博客链接
- Github 链接
- Gitlab 链接
- Gitee 链接

## 添加你的信息

在文件 [`/src/assets/memberList.js`](../src/assets/memberList.js) 中添加你的信息。

```js
{
  year: 2019, // 你加入 NetUnion 的年份
  members: [ // 你需要将你的信息添加到此数组中
    {
      color: '#ed738d', // 你的个性颜色，请选择较深的颜色。若不填写，默认为 'primary'
      nickname: 'Lolipop', // 你的昵称
      intro: '被窝一无所有，为何给我安慰', // 你的简介信息
      blog: 'https://lolipopj.github.io', // 你的博客链接（可选）
      github: 'https://github.com/LolipopJ', // 你的 Github 链接（可选）
      gitlab: 'https://gitlab.com/LolipopJ', // 你的 Gitlab 链接（可选）
      gitee: 'https://gitee.com/lolipopj', // 你的 Gitee 链接（可选）
    },
  ],
},
```

### 查看效果

按照 [README.md](../README.md) 中的提示启用本地开发，在 [`http://localhost:8080/about`](http://localhost:8080/about) 页面查看效果。其中 `8080` 是默认端口号，如果监听到其它端口请修改为被监听的端口号。

### 拉取请求

将你添加或修改的信息以 `Pull requests` 的形式提交到[此 Github 项目](https://github.com/uestclug/nu-official/pulls).
