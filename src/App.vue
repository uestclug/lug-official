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
    <ReaderDialog />
  </v-app>
</template>

<script>
import AppBar from '@/components/App/AppBar';
import FloatButton from '@/components/App/FloatButton';
import Footer from '@/components/App/Footer';
import Login from '@/components/App/Login';
import Snackbar from '@/components/App/Snackbar';
import ReaderDialog from '@/components/Modal/ReaderDialog';

export default {
  name: 'App',
  components: {
    AppBar,
    FloatButton,
    Footer,
    Login,
    Snackbar,
    ReaderDialog,
  },
  data: () => ({
    //
  }),
  methods: {
    checkToken() {
      if (this.$DevMode) {
        //
      } else {
        this.axios.post('/users/checkToken').then((Response) => {
          console.log('We checked your token just before.');
        });
      }
    },
    checkTokenAdmin() {
      if (this.$DevMode) {
        //
      } else {
        this.axios.post('/users/checkTokenAdmin').then((Response) => {
          console.log('We checked your admin token just before, sir.');
        });
      }
    },
  },
  created() {
    if (this.$DevMode) {
      console.log('You are now in DevMode, feel free to develop this website!');
      console.log('Version: ' + process.env.VUE_APP_VERSION_CODE);
    }
    if (localStorage.token) {
      this.checkToken();
    }
    if (localStorage.tokenAdmin) {
      this.checkTokenAdmin();
    }
  },
  mounted() {
    this.$Bus.$on('routeTo', (path) => {
      this.$router.push({path: path});
    });
    this.$Bus.$on('checkToken', (msg) => {
      this.checkToken();
    });
    this.$Bus.$on('checkTokenAdmin', (msg) => {
      this.checkTokenAdmin();
    });
  },
};
</script>

<style scoped>
#app {
  color: #464646;
}
</style>
