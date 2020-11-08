<template>
  <div>
    <TweetCard
      class="mb-6"
      v-for="blog in blogItems"
      v-bind:key="blog.blogId"
      :tweetId="blog.blogId"
      :tweetTitle="blog.blogTitle"
      :tweetAuthor="blog.blogAuthor"
      tweetType="blog"
      :tweetDate="blog.blogDate"
      :tweetContent="blog.blogContent"
      :tweetLocation="blog.blogLocation"
      :tweetLink="blog.blogLink"
      :blogTags="blog.blogTags"
      blogView="markdown"
    />
  </div>
</template>

<script>
import TweetCard from '@/components/Modal/TweetCard';

export default {
  name: 'BlogTweets',
  components: {
    TweetCard,
  },
  data: () => ({
    blogItems: [],
  }),
  created() {
    // TODO: 获取博客内容
    if (this.$DevMode) {
      this.blogItems = this.$DevData.blogList.blogItems;
    }
  },
};
</script>
