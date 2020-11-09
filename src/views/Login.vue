<template>
  <div>
    <div class="content text-center pb-6">
      <ContentTitle title="与我们一起" icon="fas fa-users" />
      <div class="pb-6">
        <div class="pb-1">有朋自远方来，不亦乐乎</div>
        <div class="pb-1">现在就使用你的 Github 账号登录吧</div>
      </div>
      <v-btn
        @click="loginWithGithub"
        color="primary"
        depressed
        :disabled="logining"
      ><v-icon left>fab fa-github</v-icon
        >{{ logining ? '正在使用 Github 登录中' : '使用 Github 登录' }}</v-btn
      >
    </div>
  </div>
</template>

<script>
import ContentTitle from '@/components/Modal/ContentTitle';

export default {
  name: 'Login',
  components: {
    ContentTitle,
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
