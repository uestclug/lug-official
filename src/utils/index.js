module.exports = {
  // 在新窗口打开链接
  openExternalLink(link) {
    window.open(link);
  },

  // 在当前窗口打开链接
  openLink(link) {
    window.open(link, '_self');
  },

  // 根据 news 的 tag 获取对应文本值
  getNewsTagText(newsTag) {
    switch (newsTag) {
      case 'mirrors': return '镜像站';
      case 'iptv': return 'IPTV';
      case 'repair': return '网络报修';
      case 'markdown': return '在线文档';
      case 'catroom': return 'Cat Room';
      case 'nuofficial': return '此网站';
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

  removeLocalStorageUserInfo() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenAdmin');
    localStorage.removeItem('githubId');
    localStorage.removeItem('username');
    localStorage.removeItem('userBio');
  },
};
