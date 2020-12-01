<template>
  <div>
    <TweetSkeletonLoader
      class="mt-6"
      v-if="initLoading"
      loadingType="blog"
    />
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
      >查看所有博客文章<v-icon right small>far fa-hand-point-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import TweetCard from '@/components/Model/TweetCard';
import TweetSkeletonLoader from '@/components/Model/TweetSkeletonLoader';

export default {
  name: 'BlogList',
  components: {
    TweetCard,
    TweetSkeletonLoader,
  },
  data: () => ({
    initLoading: true,
    blogLoadLimit: 4, // 获取博客量
    blogItems: [],
  }),
  created() {
    // TODO: 获取博客内容
    this.blogItems = this.$DevData.blogList.blogItems;
    this.initLoading = false;
  },
};
</script>
