<template>
  <div>
    <TweetSkeletonLoader class="mt-6" v-if="initLoading" loadingType="news" />
    <TweetCard
      class="mt-6"
      v-for="news in newsItems"
      v-bind:key="news.id"
      tweetType="news"
      :tweetId="news.id"
      :tweetTitle="news.title"
      :tweetAuthor="news.author"
      :tweetDate="news.date"
      :tweetContent="news.content"
      :tweetLocation="news.location"
      :tweetLink="news.link"
      :newsAccent="news.accent"
      :newsTag="news.tag"
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
        {{ loadingAbled ? "加载更多新闻公告" : "没有更多新闻公告啦" }}
        <v-icon right small>fas fa-search</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import TweetCard from "@/components/Model/TweetCard";
import TweetSkeletonLoader from "@/components/Model/TweetSkeletonLoader";

export default {
  name: "NewsList",
  components: {
    TweetCard,
    TweetSkeletonLoader,
  },
  data: () => ({
    // 初次加载标识
    initLoading: true,
    // 新闻对象数组
    newsItems: [],
    // 是否能够加载更多新闻
    loadingAbled: true,
    // 是否正在加载更多新闻
    isLoading: false,
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

      const newsCount = this.newsItems.length;
      let pushNewsCount = 0;
      for (
        let i = newsCount;
        i < this.$News.length && pushNewsCount < this.newsLoadLimit;
        i++
      ) {
        this.newsItems.push(this.$News[i]);
        pushNewsCount += 1;
      }

      // 初始化加载不显示 snackbar.
      if (this.initLoading) {
        this.initLoading = false;
      } else {
        this.$Bus.$emit("setSnackbar", {
          text: "新的新闻已经加载完成！",
          type: "info",
        });
      }

      if (pushNewsCount < this.newsLoadLimit) {
        this.loadingAbled = false;
      }

      this.isLoading = false;
    },
  },
};
</script>
