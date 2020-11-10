<template>
  <div class="text-center">
    <SimpleNotes title="与我们一起" icon="fas fa-users"
        primaryText="有朋自远方来，不亦乐乎"
        secondaryText="现在就使用你的 Github 账号登录吧" button="hide" />
    <v-btn
      class="mb-6"
      @click="loginWithGithub"
      color="primary"
      depressed
      :disabled="logining"
    ><v-icon left>fab fa-github</v-icon
      >{{ logining ? '正在使用 Github 登录中' : '使用 Github 登录' }}</v-btn
    >
  </div>
</template>

<script>
import SimpleNotes from '@/components/Model/SimpleNotes';

export default {
  name: 'Login',
  components: {
    SimpleNotes,
  },
  data: () => ({
    logining: false,
    // logined: false,
  }),
  methods: {
    loginWithGithub() {
      if (this.$DevMode) {
        this.logining = true;
        this.$Utils.openLink(process.env
            .VUE_APP_GITHUB_OAUTH_CLIENT_REDIRECT_URL);
      } else {
        this.logining = true;
        this.$Utils.removeLocalStorageUserInfo();
        const clientId = process.env.VUE_APP_GITHUB_OAUTH_CLIENT_ID;
        const redirectUrl = process.env
            .VUE_APP_GITHUB_OAUTH_CLIENT_REDIRECT_URL;
        this.$Utils.openLink('https://github.com/login/oauth/authorize?client_id='+clientId+'&redirect_uri='+redirectUrl);
      }
    },
  },
  mounted() {
    // this.$Bus.$on('setLoginViewLogined', (msg) => {
    //   // this.logined = true;
    //   this.$router.push({path: '/'});
    // });
    // this.$Bus.$on('setLoginViewLoginFailed', (msg) => {
    //   this.logining = false;
    // });
  },
};
</script>

<style>

</style>
