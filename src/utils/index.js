module.exports = {
  // 获取 sort() 函数进行对象排序的 function
  getSortFun(order, sortBy) {
    const ordAlpah = (order == 'asc') ? '>' : '<';
    const sortFun = new Function('a', 'b', 'return a.' + sortBy +
        ordAlpah + 'b.' + sortBy + '?1:-1');
    return sortFun;
  },

  // 在新窗口打开链接
  openExternalLink(link) {
    window.open(link);
  },

  // 在当前窗口打开链接
  openLink(link) {
    window.open(link, '_self');
  },

  // 根据 news 的 tagText 获取对应的 tag 值
  getNewsTagFromText(newsTagText) {
    switch (newsTagText) {
      case 'mirrors':
      case '镜像站':
        return 'mirrors';
      case 'iptv':
      case 'IPTV':
        return 'iptv';
      case 'repair':
      case '网络报修':
        return 'repair';
      case 'markdown':
      case '在线文档':
        return 'markdown';
      case 'minecraft':
      case '我的世界':
        return 'minecraft';
      case 'catroom':
      case 'Cat Room':
        return 'catroom';
      case 'sso':
      case 'SSO':
        return 'sso';
      case 'nuofficial':
      case '此网站':
        return 'nuofficial';
      default:
        return '';
    }
  },

  // 根据 news 的 tag 获取对应文本值
  getNewsTagText(newsTag) {
    switch (newsTag) {
      case 'mirrors':
      case '镜像站':
        return '镜像站';
      case 'iptv':
      case 'IPTV':
        return 'IPTV';
      case 'repair':
      case '网络报修':
        return '网络报修';
      case 'markdown':
      case '在线文档':
        return '在线文档';
      case 'minecraft':
      case '我的世界':
        return '我的世界';
      case 'catroom':
      case 'Cat Room':
        return 'Cat Room';
      case 'sso':
      case 'SSO':
        return 'SSO';
      case 'nuofficial':
      case '此网站':
        return '此网站';
      default:
        return '新闻公告';
    }
  },

  // 根据 news 的 accentText 获取对应的 accent 值
  getNewsAccentFromText(accentText) {
    switch (accentText) {
      case 'info':
      case '嗯哼':
        return 'info';
      case 'accent':
      case '哇喔':
        return 'accent';
      case 'warning':
      case '奥不':
        return 'warning';
      case 'error':
      case '天哪':
        return 'error';
      default:
        return 'info';
    }
  },

  // 根据 news 的 accent 获取对应文本值
  getNewsAccentText(accent) {
    switch (accent) {
      case 'info':
      case '嗯哼':
        return '嗯哼';
      case 'accent':
      case '哇喔':
        return '哇喔';
      case 'warning':
      case '奥不':
        return '奥不';
      case 'error':
      case '天哪':
        return '天哪';
      default:
        return '嗯哼';
    }
  },

  // 根据 news 的 accent 获取对应的 css 类
  getNewsAccentColorClass(accent) {
    switch (accent) {
      case 'info':
      case '嗯哼':
        return 'color-info';
      case 'accent':
      case '哇喔':
        return 'color-accent';
      case 'warning':
      case '奥不':
        return 'color-warning';
      case 'error':
      case '天哪':
        return 'color-error';
      default:
        return 'color-info';
    }
  },
};
