<template>
  <div>
    <v-row class="content">
      <v-col cols="3" class="hide-on-xs">
        <BlogNavigation />
      </v-col>
      <v-col cols="12" sm="9">
        <BlogTweets :filter="filter" :filterValue="filterValue" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogNavigation from '@/components/Blog/BlogNavigation';
import BlogTweets from '@/components/Blog/BlogTweets';

export default {
  name: 'Blog',
  components: {
    BlogNavigation,
    BlogTweets,
  },
  props: [
    'filter',
    'filterValue',
  ],
};
</script>
