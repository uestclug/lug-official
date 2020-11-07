<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 4 : 2"
        class="rounded-lg transition-swing"
      >
        <!-- 新闻公告的 tweet 卡片 -->
        <v-alert
          border="left"
          :color="newsAccent ? newsAccent : 'info'"
          colored-border
          v-if="tweetType == 'news'"
          class="mb-0"
        >
          <span
            class="clickable"
            @click="openReaderDialog"
          >
            <v-card-title
              :class="newsAccentColorClass"
            >
              <span class="mr-2">{{ tweetTitle }}</span>
              <v-chip
                v-if="newsTag"
                class="rounded-lg clickable"
                :color="newsAccent ? newsAccent : 'info'"
                label
                small
              >{{ $Utils.getNewsTagText(newsTag) }}</v-chip>
            </v-card-title>
            <v-card-subtitle
              class="pb-0"
            >{{ tweetDate }}, {{ tweetAuthor }}</v-card-subtitle>
          </span>
          <v-card-text>
            <span class="tweet-card-content">{{ tweetContent }}</span>
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
        <div
          v-else-if="tweetType == 'blog'"
          class="pa-4"
        >
          <div
            v-if="blogTags"
            class="pl-4 pt-4"
          >
            <v-chip
              v-for="blogTag in blogTags"
              v-bind:key="blogTag"
              class="mr-2 rounded-lg"
              color="primary"
              label
              small
            ><v-icon left x-small>fas fa-tag</v-icon>
              {{ blogTag }}
            </v-chip>
          </div>
          <span
            class="clickable"
            @click="toBlogTweet(tweetId)"
          >
            <v-card-title
              :class="blogTags ? 'pt-2' : ''"
            >{{ tweetTitle }}</v-card-title>
            <v-card-subtitle
              class="pb-0"
            >{{ tweetDate }}, {{ tweetAuthor }}</v-card-subtitle>
          </span>
          <v-card-text>
            <span class="tweet-card-content">{{ tweetContent }}</span>
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
    // 推送卡片公用
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
    'newsTag', // 新闻标签 ('mirrors'/'iptv'/'repair'/'markdown')
    // 博客
    'blogTags', // 博客标签
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
        newsTag: this.newsTag,
      });
    },
    toBlogTweet(blogId) {
      this.$router.push('/blog/id/' + blogId);
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
.tweet-card-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 4;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
