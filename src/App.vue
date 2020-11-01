<template>
  <v-app id="app">
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer class="mt-3" />
    <FloatButton />
    <BlogTweetsMaker />
    <NewsMaker />
  </v-app>
</template>

<script>
import AppBar from '@/components/App/AppBar';
import FloatButton from '@/components/App/FloatButton';
import Footer from '@/components/App/Footer';
import BlogTweetsMaker from '@/components/App/BlogTweetsMaker';
import NewsMaker from '@/components/App/NewsMaker';

export default {
  name: 'App',
  components: {
    AppBar,
    FloatButton,
    Footer,
    BlogTweetsMaker,
    NewsMaker,
  },
  data: () => ({
    //
  }),
  created() {
    if (this.$DevMode) {
      console.log('You are now in DevMode, feel free to develop this website!');
      console.log('Version: ' + process.env.VUE_APP_VERSION_CODE);
    }
  },
  mounted() {
    this.$Bus.$on('routeTo', (path) => {
      if (this.$route.path != path) {
        this.$router.push({path: path});
      }
    });
  },
};
</script>

<style>
#app {
  color: #464646;
}
</style>
