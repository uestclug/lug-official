<template>
  <div>
    <!--
    <v-breadcrumbs
      v-if="breadcrumbsItems.length != 0"
      large
      :items="breadcrumbsItems"
    ></v-breadcrumbs>
    -->
    <TweetSkeletonLoader
      class="mb-6"
      v-if="initLoading"
      loadingType="blog"
    />
    <TweetCard
      class="mb-6"
      v-for="blog in blogItems"
      v-bind:key="blog.id"
      tweetType="blog"
      blogView="markdown"
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
        class="float-right"
        color="primary"
        text
        disabled
      >{{ blogItems.length == 0 ?
          '未找到符合条件的博客文章' :
          '没有更多博客文章啦'
        }}<v-icon right small>fas fa-search</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import TweetCard from '@/components/Model/TweetCard';
import TweetSkeletonLoader from '@/components/Model/TweetSkeletonLoader';

export default {
  name: 'BlogTweets',
  components: {
    TweetCard,
    TweetSkeletonLoader,
  },
  data: () => ({
    initLoading: true,
    blogItems: [],
    // 面包屑导航数组
    breadcrumbsItems: [],
  }),
  props: [
    'filter',
    'filterValue',
  ],
  methods: {
    // 获取博客内容
    getBlogTweets() {
      this.initLoading = true;
      this.blogItems = [];

      const filter = this.filter;
      const filterValue = this.filterValue;
      if (filter && filterValue) { // 博客文章过滤
        if (filter == 'tag') { // 按照博客的 tag 过滤
          for (let i = 0; i < this.$Blogs.length; i++) {
            for (let n = 0; n < this.$Blogs[i].tags.length; n++) {
              if (this.$Blogs[i].tags[n] == filterValue) {
                this.blogItems.push(this.$Blogs[i]);
                break;
              }
            }
          }

          this.initLoading = false;
        } else if (filter == 'id') { // 按照博客的 id 过滤
          for (let i = 0; i < this.$Blogs.length; i++) {
            if (this.$Blogs[i].id == filterValue) {
              this.blogItems.push(this.$Blogs[i]);
              break;
            }
          }

          this.initLoading = false;
        } else {
          return;
        }
      } else { // 按时间顺序获得博客
        this.blogItems = this.$Blogs;
        this.initLoading = false;
      }
    },
    // 获取面包屑导航
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
    filterValue() {
      // console.log('filter value changed.');
      this.getBlogTweets();
      // this.getBreadcrumbsItems();
    },
  },
};
</script>
