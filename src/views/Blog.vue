<template>
  <div>
    <v-row class="content" >
      <v-col class="d-none d-md-flex">
        <BlogNavigation cols="3" md="3" />
      </v-col>
      <v-col>
        <BlogTweets cols="12" md="9" />
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
};
</script>
