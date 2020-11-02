<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        hover
      >
        <div v-if="loadingAbled">
          <v-skeleton-loader
            type="heading, table-cell, paragraph"
            class="pa-4"
          />
          <v-fade-transition>
            <v-overlay
              v-if="hover"
              absolute
              color="secondary"
            >
              <v-btn
                rounded
                :depressed="!isLoading"
                :text="isLoading"
                :loading="isLoading"
                color="secondary"
              >{{ isLoading ? '正在获取中...' : '点击加载更多' }}</v-btn>
            </v-overlay>
          </v-fade-transition>
        </div>
        <div v-else>
          <v-card-title>{{ tweetTitle }}</v-card-title>
          <v-card-subtitle>{{ tweetAuthor }}, {{ tweetDate }}</v-card-subtitle>
          <v-card-text>{{ tweetContent }}</v-card-text>
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
    'tweetId', // 编号
    'tweetTitle', // 题目
    'tweetAuthor', // 作者，可选
    'tweetType', // 类型
    'tweetAccent', // 强调颜色
    'tweetDate', // 日期
    'tweetContent', // 内容
    'tweetLocation', // 地点，可选
    'tweetLink', // 相关链接，可选
    'loadingAbled', // 渲染为骨架屏加载模式，提供加载更多选项，可选
    'isLoading', // 设置按钮加载中，可选
  ],
};
</script>

<style scoped>

</style>
