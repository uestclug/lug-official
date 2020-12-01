<template>
  <div>
    <TweetSkeletonLoader
      class="mt-6"
      v-if="initLoading"
      loadingType="news"
    />
    <TweetCard
      class="mt-6"
      v-for="news in newsItems"
      v-bind:key="news.newsId"
      :tweetId="news.newsId"
      :tweetTitle="news.newsTitle"
      :tweetAuthor="news.newsAuthor"
      tweetType="news"
      :tweetDate="news.newsDate"
      :tweetContent="news.newsContent"
      :tweetLocation="news.newsLocation"
      :tweetLink="news.newsLink"
      :newsAccent="news.newsAccent"
      :newsTag="news.newsTag"
    />
    <div>
      <v-btn
        class="mt-2 float-right"
        color="primary"
        text
        @click="loadMoreNews"
        :disabled="!loadingAbled"
        :loading="isLoading"
      >
        {{ loadingAbled ? '加载更多新闻公告' : '没有更多新闻公告啦' }}
        <v-icon right small>fas fa-search</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import TweetCard from '@/components/Model/TweetCard';
import TweetSkeletonLoader from '@/components/Model/TweetSkeletonLoader';

export default {
  name: 'NewsList',
  components: {
    TweetCard,
    TweetSkeletonLoader,
  },
  data: () => ({
    // 初次加载标识
    initLoading: true,
    // 新闻
    newsItems: [],
    // 是否能够加载更多新闻
    loadingAbled: true,
    // 是否正在加载更多新闻
    isLoading: false,
    // 当前页数
    page: 0,
    // 新闻加载数量
    newsLoadLimit: 5,
  }),
  created() {
    this.loadMoreNews();
  },
  methods: {
    loadMoreNews() {
      if (this.isLoading) return;
      this.isLoading = true;

      const newsCount = Response.data.result.count;
      const news = Response.data.result.news;
      for (let i = 0; i < news.length; i++) {
        news[i].newsDate = news[i].createdAt.split('T')[0];
        news[i].newsAuthor = news[i].Account.newsAuthor;
        this.newsItems.push(news[i]);
      }
      this.page += 1;

      // 初始化加载不显示 snackbar.
      if (this.initLoading) {
        this.initLoading = false;
      } else {
        this.$Bus.$emit('setSnackbar', {
          text: '新的新闻已经加载完成！',
          type: 'info',
        });
      }

      if (newsCount < this.newsLoadLimit) {
        this.loadingAbled = false;
      }

      this.isLoading = false;
    },
  },
};
</script>
