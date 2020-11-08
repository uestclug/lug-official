<template>
  <div>
    <TweetCard
      class="mt-6"
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
    />
    <div>
      <v-btn
        class="mt-2 float-right"
        color="primary"
        text
        to="/blog"
      >
        查看所有博客文章
        <v-icon right small>far fa-hand-point-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import TweetCard from '@/components/Modal/TweetCard';

export default {
  name: 'BlogList',
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
