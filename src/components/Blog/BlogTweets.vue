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
    <div>
      <v-btn
        class="float-right"
        color="primary"
        text
        @click="loadMoreBlogTweets"
        :disabled="!loadingAbled"
        :loading="isLoading"
      >
        {{ loadingAbled ? '加载更多博客文章' : '没有更多博客文章啦' }}
        <v-icon right small>fas fa-search</v-icon>
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
    initLoading: true, // 初始化加载，为 true 时显示骨架屏
    blogItems: [], // 博客数组
    loadingAbled: true, // 可以加载更多，为 true 时可以点击加载更多按钮
    isLoading: true, // 加载状态，为 true 时设置加载按钮为加载中
    breadcrumbsItems: [], // 面包屑导航数组
    page: 0, // 当前加载页
    blogLoadLimit: 8, // 单次加载博客最大数
  }),
  props: [
    'filter',
    'filterValue',
  ],
  methods: {
    // 获取博客内容
    getBlogTweets() {
      const filter = this.filter;
      const filterValue = this.filterValue;
      if (filter && filterValue) { // 博客文章过滤
        if (filter == 'tag') {
          this.axios.post('/tweet/getBlogTweet', {
            page: this.page,
            limit: this.blogLoadLimit,
            blogTag: filterValue,
          }).then((Response) => {
            if (Response.data.code == 200) {
              const count = Response.data.result.count;
              const blog = Response.data.result.blog;
              for (let i = 0; i < blog.length; i++) {
                blog[i].blogDate = blog[i].createdAt.split('T')[0];
                blog[i].blogAuthor = blog[i].Account.blogAuthor;
                this.blogItems.push(blog[i]);
              }

              if (count < this.blogLoadLimit) {
                this.loadingAbled = false;
              }

              this.page += 1;
              this.initLoading = false;
              this.isLoading = false;
            } else {
              return;
            }
          });
        } else if (filter == 'id') {
          this.axios.post('/tweet/getBlogTweet', {
            blogId: filterValue,
          }).then((Response) => {
            if (Response.data.code == 200) {
              // console.log(Response);
              const blog = Response.data.result.blog;
              blog.blogDate = blog.createdAt.split('T')[0];
              blog.blogAuthor = blog.Account.blogAuthor;
              this.blogItems.push(blog);

              this.loadingAbled = false;
              this.initLoading = false;
              this.isLoading = false;
            } else {
              return;
            }
          });
        } else {
          return;
        }
      } else { // 按时间顺序获得博客
        this.axios.post('/tweet/getBlogTweet', {
          page: this.page,
          limit: this.blogLoadLimit,
        }).then((Response) => {
          // console.log(Response);
          if (Response.data.code == 200) {
            const count = Response.data.result.count;
            const blog = Response.data.result.blog;
            for (let i = 0; i < blog.length; i++) {
              blog[i].blogDate = blog[i].createdAt.split('T')[0];
              blog[i].blogAuthor = blog[i].Account.blogAuthor;
              this.blogItems.push(blog[i]);
            }

            if (count < this.blogLoadLimit) {
              this.loadingAbled = false;
            }

            this.page += 1;
            this.initLoading = false;
            this.isLoading = false;
          }
        });
      }
    },
    // 启动时获取博客内容
    initBlogTweets() {
      this.blogItems = [];
      this.isLoading = true;
      this.initLoading = true;

      if (this.$DevMode) { // 开发者模式
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
          this.loadingAbled = false;
        } else {
          this.blogItems = blogItems;
        }
        this.initLoading = false;
        this.isLoading = false;
      } else { // 产品模式
        this.getBlogTweets();
      }
    },
    // 加载更多博客内容
    loadMoreBlogTweets() {
      this.isLoading = true;

      if (this.$DevMode) {
        setTimeout(() => {
          this.isLoading = false;
          this.loadingAbled = false;
        }, 1000);
        return;
      }

      this.getBlogTweets();
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
    this.initBlogTweets();
    // this.getBreadcrumbsItems();
  },
  watch: {
    filterValue() {
      // console.log('filter value changed.');
      this.initLoading = true;
      this.blogItems = [];
      this.loadingAbled = true;
      this.isLoading = true;
      this.page = 0;
      this.initBlogTweets();
      // this.getBreadcrumbsItems();
    },
  },
};
</script>
