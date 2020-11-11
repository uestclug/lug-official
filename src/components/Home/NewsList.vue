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
    initLoading: true,
    newsItems: [],
    loadingAbled: true,
    isLoading: false,
    page: 0,
    newsLoadLimit: 5, // 新闻加载数量
  }),
  created() {
    // TODO: 获取新闻公告信息
    if (this.$DevMode) {
      setTimeout(() => {
        this.newsItems = this.$DevData.newsList.newsItems;
        this.initLoading = false;
      }, 700);
    } else {
      this.loadMoreNews();
    }
  },
  methods: {
    // TODO: 加载更多新闻公告信息
    loadMoreNews() {
      if (this.isLoading) return;
      this.isLoading = true;

      if (this.$DevMode) {
        setTimeout(() => {
          this.newsItems.push(this.$DevData.newsList.newsItems[0]);
          this.$Bus.$emit('setSnackbar', {
            text: '新的新闻已经加载完成！',
            type: 'info',
          });
          this.isLoading = false;
          if (this.newsItems.length == 7) this.loadingAbled = false;
        }, 400);
      } else {
        this.axios.post('/tweet/getNewsTweet', {
          page: this.page,
          limit: this.newsLoadLimit,
        }).then((Response) => {
          // console.log(Response);
          if (Response.data.code == 200) {
            if (this.page == 0) {
              this.initLoading = false;
            }

            const newsCount = Response.data.result.count;
            const news = Response.data.result.news;
            for (let i = 0; i < news.length; i++) {
              news[i].newsDate = news[i].createdAt.split('T')[0];
              news[i].newsAuthor = news[i].Account.newsAuthor;
              this.newsItems.push(news[i]);
            }

            this.page += 1;
            this.isLoading = false;

            if (newsCount < this.newsLoadLimit) {
              this.loadingAbled = false;
            }
          }
        });
      }
    },
  },
};
</script>
