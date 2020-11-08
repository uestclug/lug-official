<template>
  <div>
    <BlogTweetCard
      class="mb-6"
      v-for="blog in blogItems"
      v-bind:key="blog.blogId"
      :blogId="blog.blogId"
      :blogTitle="blog.blogTitle"
      :blogAuthor="blog.blogAuthor"
      :blogDate="blog.blogDate"
      :blogContent="blog.blogContent"
      :blogLocation="blog.blogLocation"
      :blogLink="blog.blogLink"
      :blogTags="blog.blogTags"
    />
  </div>
</template>

<script>
import BlogTweetCard from '@/components/Blog/BlogTweetCard';

export default {
  name: 'BlogTweets',
  components: {
    BlogTweetCard,
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
