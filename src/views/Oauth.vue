<template>
  <div>
    <div class="content text-center pb-6">
      <ContentTitle title="与您一起" icon="fas fa-heart" />
      <div class="pb-6">
        <div class="pb-1">正在将您登录到我们的舰队</div>
        <div class="pb-1">请稍等，成功后会自动跳转到首页</div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from '@/components/Modal/ContentTitle';

export default {
  name: 'Oauth',
  components: {
    ContentTitle,
  },
  methods: {
    // setLoginViewLogined() {
    //   this.$Bus.$emit('setLoginViewLogined');
    // },
    // setLoginViewLoginFailed() {
    //   this.$Bus.$emit('setLoginViewLoginFailed');
    // },
  },
  created() {
    if (this.$DevMode) {
      setTimeout(() => {
        localStorage.setItem('userId', 'userId');
        localStorage.setItem('token', 'token');
        localStorage.setItem('tokenAdmin', 'tokenAdmin');
        localStorage.setItem('githubAccessToken', 'githubAccessToken');
        this.$Bus.$emit('setSnackbar', {
          type: 'success',
          text: '嗨，欢迎回到我们的大航线！',
          timeout: 5000,
        });
        this.$router.push({path: '/'});
      }, 2000);
    } else {
      // console.log(this.$route.query.code);
      this.axios.post('/oauth/github/login', {
        code: this.$route.query.code,
      }).then((Response) => {
        // console.log(Response.data);
        if (Response.data.code == 200) {
          localStorage.setItem('githubAccessToken',
              Response.data.result.accessToken);
          this.$Bus.$emit('setSnackbar', {
            type: 'success',
            text: '嗨，欢迎回到我们的大航线！',
            timeout: 5000,
          });
        } else {
          this.$Bus.$emit('setSnackbar', {
            type: 'error',
            text: 'Ops, 我们未能将您成功登录到我们的舰队，请稍后再次申请！',
            timeout: 5000,
          });
        }
        this.$router.push({path: '/'});
      });
    }
  },
};
</script>

<style>

</style>
