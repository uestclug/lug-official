<template>
  <div>
    <div class="pb-6">
      <SimpleNotes title="与您一起" icon="fas fa-heart"
          primaryText="正在将您登录到我们的舰队"
          secondaryText="请稍等，成功后会自动跳转到首页..." button="hide" />
      <div class="text-center">
        <div class="pb-1">您已经等待了 <strong>{{ waitTimeCount }}</strong> 秒钟</div>
        <div><small>{{ waitTimeText }}</small></div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleNotes from '@/components/Model/SimpleNotes';

export default {
  name: 'Oauth',
  components: {
    SimpleNotes,
  },
  data: () => ({
    waitTimeCount: 0,
    waitTimeText: '',
  }),
  methods: {
    setWaitTimeCount() {
      this.waitTimeCount += 1;
      switch (this.waitTimeCount) {
        case 5:
          this.waitTimeText = '从 Github 读取您的信息中...';
          break;
        case 10:
          this.waitTimeText = '这个过程花费的时间取决于您的网络状况...';
          break;
        case 15:
          this.waitTimeText = '看着时间从眼前流逝...';
          break;
        default:
          break;
      }
    },
  },
  created() {
    setInterval(this.setWaitTimeCount, 1000);
    if (this.$DevMode) {
      setTimeout(() => {
        localStorage.token = 'token';
        localStorage.tokenAdmin = 'tokenAdmin';
        localStorage.githubId = 'githubId';
        localStorage.username = 'username';
        localStorage.userBio = 'userBio';
        this.$Bus.$emit('setSnackbar', {
          type: 'success',
          text: '嗨，欢迎回到我们的大航线！',
          timeout: 6500,
        });
        this.$router.push({path: '/'});
      }, 2000);
      return;
    }

    // console.log(this.$route.query.code);
    this.axios.post('/oauth/github/login', {
      code: this.$route.query.code,
    }).then((Response) => {
      // console.log(Response.data);
      if (Response.data.code == 200) {
        localStorage.token = Response.data.result.token;
        localStorage.githubId = Response.data.result.githubId;
        localStorage.username = Response.data.result.username;
        localStorage.userBio = Response.data.result.userBio;

        if (Response.data.result.tokenAdmin) {
          localStorage.tokenAdmin = Response.data.result.tokenAdmin;
          this.$Bus.$emit('setSnackbar', {
            type: 'success',
            text: '嗨，长官，欢迎回到我们的大航线！',
            timeout: 5000,
          });
        } else {
          this.$Bus.$emit('setSnackbar', {
            type: 'success',
            text: '嗨，欢迎来到我们的大航线！',
            timeout: 5000,
          });
        }
      } else {
        this.$Bus.$emit('setSnackbar', {
          type: 'error',
          text: 'Ops, 我们未能将您成功登录到我们的舰队，请稍后再次申请！',
          timeout: 5000,
        });
      }
      this.$router.push({path: '/'});
    });
  },
};
</script>

<style>

</style>
