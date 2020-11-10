<template>
  <div>
    <!--
    <v-breadcrumbs
      v-if="breadcrumbsItems.length != 0"
      large
      :items="breadcrumbsItems"
    ></v-breadcrumbs>
    -->
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
import TweetCard from '@/components/Model/TweetCard';

export default {
  name: 'BlogTweets',
  components: {
    TweetCard,
  },
  data: () => ({
    blogItems: [],
    breadcrumbsItems: [],
  }),
  props: [
    'filter',
    'filterValue',
  ],
  methods: {
    // TODO: 获取博客内容
    getBlogTweets() {
      if (this.$DevMode) {
        this.blogItems = [];
        const filter = this.filter;
        const filterValue = this.filterValue;
        const blogItems = this.$DevData.blogList.blogItems;
        if (filter == 'tag') {
          for (const blogItem of blogItems) {
            for (const blogTag of blogItem.blogTags) {
              if (blogTag == filterValue) {
                this.blogItems.push(blogItem);
                break;
              }
            }
          }
        } else if (filter == 'id') {
          for (const blogItem of blogItems) {
            if (blogItem.blogId == filterValue) {
              this.blogItems.push(blogItem);
              break;
            }
          }
        } else {
          this.blogItems = blogItems;
        }
      }
    },
    getBreadcrumbsItems() {
      if (this.filter && this.filterValue) {
        this.breadcrumbsItems = [
          {
            text: 'blog',
          },
          {
            text: this.filter,
          },
          {
            text: this.filterValue,
          },
        ];
      } else {
        this.breadcrumbsItems = [];
      }
    },
  },
  created() {
    this.getBlogTweets();
    // this.getBreadcrumbsItems();
  },
  watch: {
    filter() {
      this.getBlogTweets();
      // this.getBreadcrumbsItems();
    },
    filterValue() {
      this.getBlogTweets();
      // this.getBreadcrumbsItems();
    },
  },
};
</script>
