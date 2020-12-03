module.exports = function(content, type) {
  // 根据 `---` 将文章拆分为数组
  const contentArray = content.split('---\n');
  // 编写者正确编写属性内容
  if (contentArray.length >= 3) {
    // 获取属性字符串
    const contentInfo = contentArray[1];
    // 根据 `\n` 将属性字符串拆分为属性数组
    const contentInfoArray = contentInfo.split('\n');
    // 处理属性数组中的属性
    const contentInfoItem = {};
    // 分割后的属性数组最后一个为空元素，故使用 arr.length - 1
    for (let i = 0; i < contentInfoArray.length - 1; i++) {
      let index = contentInfoArray[i].indexOf(': ');
      // 获取属性名
      const param = contentInfoArray[i].substring(0, index);
      // 获取属性名对应的值
      let value;
      if (index != -1) {
        value = contentInfoArray[i].substring(index + 2);
      } else { // 编写者甚至没有在冒号后空格！天哪真可怕
        index = contentInfoArray[i].indexOf(':');
        value = contentInfoArray[i].substring(index + 1);
      }
      // 添加属性
      contentInfoItem[param] = value;
    }

    // 获取正文字符串
    let contentText = '';
    if (contentArray.length == 3) {
      contentText = contentArray[2];
    } else { // 撰写者在正文中使用了 `---` 作为分隔符
      contentText += contentArray[2];
      for (let i = 3; i < contentArray.length; i++) {
        contentText += '\n\n---\n\n';
        contentText += contentArray[i];
      }
    }

    // 将解析内容合并为结果对象
    const result = {
      ...contentInfoItem,
      content: contentText,
    };

    // 对 date 属性进行处理
    if (result.date != null) {
      const dateArray = result.date.split('-');
      const dateYear = dateArray[0];
      let dateMonth = dateArray[1];
      let dateDay = dateArray[2];
      if (dateMonth.length == 1) {
        dateMonth = '0' + dateMonth;
      }
      if (dateDay.length == 1) {
        dateDay = '0' + dateDay;
      }
      result.date = dateYear + '-' + dateMonth + '-' + dateDay;
    }

    // 对 Blog 的 tags 属性进行处理
    if (type == 'blog') {
      if (result.tags == null || result.tags == ['']) {
        result.tags = ['未归档'];
      } else {
        result.tags = result.tags.split('#');
      }
    }

    // 结果对象中的 title 和 date 不能为空
    if (result.title != null && result.date != null) {
      return result;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
