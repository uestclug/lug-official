module.exports = function (content, type) {
  // 根据 `---` 将文章拆分为数组
  const contentArray = content.split(/---+\r?\n/g);

  if (contentArray.length >= 3) {
    // 根据 `\n` 将属性字符串拆分为属性数组
    const contentInfo = contentArray[1];
    const contentInfoArray = contentInfo.split(/\r?\n/g);

    // 获取属性对象
    const contentInfoItem = {};
    for (let i = 0; i < contentInfoArray.length - 1; i++) {
      const contentInfoParamArray = contentInfoArray[i].split(":");
      let contentInfoParamValue = "";
      for (let n = 1; n < contentInfoParamArray.length; n++) {
        contentInfoParamValue += contentInfoParamArray[n] + ":";
      }
      contentInfoItem[contentInfoParamArray[0].trim()] = contentInfoParamValue
        .slice(0, -1)
        .trim(); // 使用 slice() 删除多余的 : 号
    }

    // 获取正文字符串
    let contentText = contentArray[2];
    if (contentArray.length > 3) {
      for (let i = 3; i < contentArray.length; i++) {
        contentText += "---\n";
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
      const dateArray = result.date.split("-");
      const dateYear = dateArray[0];
      let dateMonth = dateArray[1];
      let dateDay = dateArray[2];
      if (dateMonth.length == 1) {
        dateMonth = "0" + dateMonth;
      }
      if (dateDay.length == 1) {
        dateDay = "0" + dateDay;
      }
      result.date = dateYear + "-" + dateMonth + "-" + dateDay;
    }

    // 对 Blog 的 tags 属性进行处理
    if (type == "blog") {
      if (result.tags == null || result.tags == [""]) {
        result.tags = ["未归档"];
      } else {
        result.tags = result.tags.split("#");
      }
    }

    if (
      result.title != null &&
      result.title != "" &&
      result.date != null &&
      result.date != ""
    ) {
      return result;
    } else {
      console.log("文章的 title 和 date 项不能为空！");
      return null;
    }
  } else {
    // 编写者没有正确编写属性内容
    console.log("请正确编写文章属性内容！");
    return null;
  }
};
