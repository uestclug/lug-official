<template>
  <div>
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
    <!--
    <TweetSkeletonLoader
      class="mt-6"
      v-if="loadingAbled"
      @click.native="loadMoreNews"
      loadingType="news"
      :loadingAbled="loadingAbled"
      :isLoading="isLoading"
    />
    -->
  </div>
</template>

<script>
import TweetCard from '@/components/Modal/TweetCard';
// import TweetSkeletonLoader from '@/components/Modal/TweetSkeletonLoader';

export default {
  name: 'NewsList',
  components: {
    TweetCard,
    // TweetSkeletonLoader,
  },
  data: () => ({
    newsItems: [],
    loadingAbled: true,
    isLoading: false,
  }),
  created() {
    // TODO: 获取新闻公告信息
    if (this.$DevMode) {
      this.newsItems = this.$DevData.newsList.newsItems;
    }
  },
  methods: {
    // TODO: 加载更多新闻公告信息
    loadMoreNews() {
      if (this.isLoading) return;
      this.isLoading = true;
      setTimeout(() => {
        this.newsItems.push(this.$DevData.newsList.newsItems[0]);
        this.$Bus.$emit('setSnackbar', {
          text: '新的新闻已经加载完成！',
          type: 'info',
        });
        this.isLoading = false;
        if (this.newsItems.length == 7) this.loadingAbled = false;
      }, 400);
    },
    // TODO: 管理员修改新闻公告入口
    // TODO: 管理员移除新闻公告入口
  },
};
</script>
