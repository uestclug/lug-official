<template>
  <v-app id="app">
    <AppBar style="z-index: 2" />
    <v-main style="z-index: 1">
      <router-view />
    </v-main>
    <Footer class="mt-3" style="z-index: 1" />
    <FloatButton style="z-index: 2" />
    <Snackbar style="z-index: 2" />
    <ReaderDialog style="z-index: 3" />
  </v-app>
</template>

<script>
import AppBar from "@/components/App/AppBar";
import FloatButton from "@/components/App/FloatButton";
import Footer from "@/components/App/Footer";
import Snackbar from "@/components/App/Snackbar";
import ReaderDialog from "@/components/Model/ReaderDialog";

export default {
  name: "App",
  components: {
    AppBar,
    FloatButton,
    Footer,
    Snackbar,
    ReaderDialog,
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
  created() {
    if (this.$DevMode) {
      console.log("You are now in DevMode, feel free to develop this website!");
      console.log("Version: " + process.env.VUE_APP_VERSION_CODE);
      console.log("Read blogs:");
      console.log(this.$Blogs);
      console.log("Read news:");
      console.log(this.$News);
    }
  },
  mounted() {
    this.$Bus.$on("routeTo", (path) => {
      this.$router.push({ path: path });
    });
  },
};
</script>

<style scoped>
#app {
  color: #464646;
}
</style>
