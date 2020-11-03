<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 4 : 2"
        class="rounded-lg transition-swing"
      >
        <v-alert
          border="left"
          :color="newsAccent ? newsAccent : 'info'"
          colored-border
          v-if="tweetType == 'news'"
        >
          <v-card-title :class="newsAccentColor"
            >{{ tweetTitle }}</v-card-title
          >
          <v-card-subtitle
            >{{ tweetAuthor }}, {{ tweetDate }}</v-card-subtitle
          >
          <v-card-text class="color-secondary"
            >{{ tweetContent }}</v-card-text
          >
        </v-alert>
        <div v-else-if="tweetType == 'blog'">
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'TweetCard',
  data: () => ({
    //
  }),
  props: [
    // 推送公用
    'tweetId', // 编号
    'tweetTitle', // 题目
    'tweetAuthor', // 作者
    'tweetType', // 类型 ('news'/'blog')
    'tweetDate', // 日期 (例如: '2020-11-02')
    'tweetContent', // 内容
    'tweetLocation', // 地点
    'tweetLink', // 相关链接
    // 新闻
    'newsAccent', // 新闻强调颜色 ('info'/'accent'/'warning'/'error')
  ],
  computed: {
    newsAccentColor() {
      if (this.newsAccent == 'info' ||
          this.newsAccent == 'accent' ||
          this.newsAccent == 'warning' ||
          this.newsAccent == 'error') {
        return 'color-' + this.newsAccent;
      } else return 'color-info';
    },
  },
};
</script>
