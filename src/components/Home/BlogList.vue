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
      v-bind:key="blog.id"
      tweetType="blog"
      :tweetId="blog.id"
      :tweetTitle="blog.title"
      :tweetAuthor="blog.author"
      :tweetDate="blog.date"
      :tweetContent="blog.content"
      :tweetLocation="blog.location"
      :tweetLink="blog.link"
      :blogTags="blog.tags"
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
    blogLoadLimit: 4,
    blogItems: [],
  }),
  created() {
    for (let i = 0; i < this.$Blogs.length && i < this.blogLoadLimit; i++) {
      this.blogItems.push(this.$Blogs[i]);
    }
    this.initLoading = false;
  },
};
</script>
