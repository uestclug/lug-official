<template>
  <div class="pt-3">
    <TweetCard
      class="mb-6"
      v-for="news in newsItems"
      v-bind:key="news.tweetId"
      :tweetId="news.tweetId"
      :tweetTitle="news.tweetTitle"
      :tweetAuthor="news.tweetAuthor"
      :tweetType="news.tweetType"
      :tweetAccent="news.tweetAccent"
      :tweetDate="news.tweetDate"
      :tweetContent="news.tweetContent"
      :tweetLocation="news.tweetLocation"
      :tweetLink="news.tweetLink"
    />
    <TweetCard
      v-if="loadingAbled"
      @click.native="loadMoreNews"
      :loadingAbled="loadingAbled"
      :isLoading="isLoading"
    />
  </div>
</template>

<script>
import TweetCard from '@/components/Modal/TweetCard';

export default {
  name: 'NewsList',
  components: {
    TweetCard,
  },
  data: () => ({
    newsItems: [],
    loadingAbled: true,
    isLoading: false,
  }),
  created() {
    if (this.$DevMode) {
      this.newsItems = this.$DevData.newsList.newsItems;
    }
  },
  methods: {
    loadMoreNews() {
      console.log('Click load more news');
      this.isLoading = true;
      setTimeout(() => {
        console.log('More news loaded');
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>
