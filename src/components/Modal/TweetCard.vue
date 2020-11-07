<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 4 : 2"
        class="rounded-lg transition-swing"
      >
        <!-- 新闻的 tweet 卡片 -->
        <v-alert
          border="left"
          :color="newsAccent ? newsAccent : 'info'"
          colored-border
          v-if="tweetType == 'news'"
        >
          <span
            class="clickable"
            @click="openReaderDialog"
          >
            <v-card-title
              :class="newsAccentColorClass"
            >{{ tweetTitle }}</v-card-title>
            <v-card-subtitle
              class="pb-0"
            >{{ tweetDate }}, {{ tweetAuthor }}</v-card-subtitle>
          </span>
          <v-card-text>
            <span class="tweet-card-content-news">{{ tweetContent }}</span>
            <div>
              <v-chip
                v-if="tweetLocation"
                class="mt-2 mr-2 rounded-lg"
                label
                outlined
                small
              ><v-icon left x-small>fas fa-map-marker-alt</v-icon>
                {{ tweetLocation }}
              </v-chip>
              <v-chip
                v-if="tweetLink"
                class="mt-2 rounded-lg"
                @click="$Utils.openExternalLink(tweetLink)"
                label
                outlined
                small
              ><v-icon left x-small>fas fa-link</v-icon>
                相关链接
              </v-chip>
            </div>
          </v-card-text>
        </v-alert>
        <!-- 博客的 tweet 卡片 -->
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
    'newsAccent', // 新闻类型 ('info'/'accent'/'warning'/'error')
  ],
  methods: {
    openReaderDialog() {
      this.$Bus.$emit('setReaderDialog', {
        title: this.tweetTitle,
        author: this.tweetAuthor,
        date: this.tweetDate,
        content: this.tweetContent,
        location: this.tweetLocation,
        link: this.tweetLink,
        accent: this.newsAccent,
        accentColorClass: this.newsAccentColorClass,
      });
    },
  },
  computed: {
    newsAccentColorClass() {
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

<style scoped>
.tweet-card-content-news {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
