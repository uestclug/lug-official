const yaml = require("js-yaml");

module.exports = function (content, type) {
  // 根据 `---` 将 Markdown 文档拆分为数组
  const contentArray = content.split(/---+\r?\n/g);

  if (contentArray.length >= 3) {
    // 获取属性对象
    const contentInfo = contentArray[1];
    const contentInfoItem = yaml.load(contentInfo);

    // 获取正文内容
    let contentText = contentArray[2];
    if (contentArray.length > 3) {
      for (let i = 3; i < contentArray.length; i++) {
        contentText += "---\n";
        contentText += contentArray[i];
      }
    }

    // 合并解析的结果
    const result = {
      ...contentInfoItem,
      content: contentText,
    };

    // 检验 title 项
    if (!result.title) {
      console.error("文章的 title 属性不能为空");
      return false;
    }

    // 对 date 属性进行处理
    result.date = new Date(result.date || new Date()).toLocaleDateString();

    // 对 Blog 的 tags 属性进行处理
    if (type == "blog") {
      if (!result.tags) {
        result.tags = ["未归档"];
      } else {
        result.tags = result.tags.split("#");
      }
    }

    return result;
  } else {
    // 编写者没有正确编写属性内容
    console.error("请正确编写文章属性内容");
    return false;
  }
};
