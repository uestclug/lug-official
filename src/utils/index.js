module.exports = {
  // 打开外链网页
  openExternalLink(link) {
    window.open(link);
  },

  // 根据 news 的 tag 获取对应文本值
  getNewsTagText(newsTag) {
    switch (newsTag) {
      case 'mirrors': return '镜像站';
      case 'iptv': return 'IPTV';
      case 'repair': return '网络报修';
      case 'markdown': return '在线文档';
      default: return '新闻公告';
    }
  },

  // 根据 news 的 accent 获取对应文本值
  getNewsAccentText(accent) {
    switch (accent) {
      case 'info': return '嗯哼';
      case 'accent': return '哇喔';
      case 'warning': return '奥不';
      case 'error': return '天哪';
      default: return '嗯哼';
    }
  },
};
