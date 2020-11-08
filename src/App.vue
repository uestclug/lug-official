<template>
  <v-app id="app">
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer class="mt-3" />
    <FloatButton />
    <Login />
    <Snackbar />
    <MakerDialog />
    <ReaderDialog />
  </v-app>
</template>

<script>
import AppBar from '@/components/App/AppBar';
import FloatButton from '@/components/App/FloatButton';
import Footer from '@/components/App/Footer';
import Login from '@/components/App/Login';
import Snackbar from '@/components/App/Snackbar';
import MakerDialog from '@/components/Modal/MakerDialog';
import ReaderDialog from '@/components/Modal/ReaderDialog';

export default {
  name: 'App',
  components: {
    AppBar,
    FloatButton,
    Footer,
    Login,
    Snackbar,
    MakerDialog,
    ReaderDialog,
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
      this.$router.push({path: path});
    });
  },
};
</script>

<style scoped>
#app {
  color: #464646;
}
</style>
