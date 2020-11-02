<template>
  <v-row>
    <v-col
      cols="6"
      md="4"
      lg="3"
      v-for="serve in serves"
      v-bind:key="serve.name"
      class="text-center"
    >
      <span class="clickable" @click="redirectTo(serve.route, serve.link)">
        <v-icon
          class="serve-icon pb-4"
          color="primary"
        >{{ serve.icon }}</v-icon>
        <h3>{{ serve.name }}</h3>
        <small>{{ serve.intro }}</small>
      </span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Serves',
  data: () => ({
    serves: [
      {
        name: '开源镜像站',
        icon: 'fas fa-compact-disc',
        intro: '成电开源镜像站',
        link: 'http://mirrors.uestc.cn',
      },
      {
        name: 'IPTV 直播',
        icon: 'fas fa-headset',
        intro: 'IPTV，好的 TV',
        link: 'https://iptv.uestc.edu.cn',
      },
      {
        name: '宿舍网络报修',
        icon: 'fas fa-tools',
        intro: '您的寝室生活救星',
        link: '',
      },
      {
        name: '在线文档',
        icon: 'fas fa-file-alt',
        intro: '使用 Markdown 写作与分享',
        link: 'https://md.uestclug.org',
      },
      {
        name: 'CAT ROOM',
        icon: 'fas fa-cat',
        intro: '摸鱼聊天留言板',
        route: '/chat',
      },
      {
        name: 'ISSUES',
        icon: 'fas fa-tasks',
        intro: 'Bug 提交/意见反馈',
        link: 'https://github.com/uestclug/nu-official/issues',
      },
    ],
  }),
  methods: {
    redirectTo(route, link) {
      if (route != null && route != '') {
        this.$router.push(route);
      } else if (link != null && link != '') {
        this.$Utils.openExternalLink(link);
      } else {
        console.log('此服务未绑定链接！请联系我们吐槽。');
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.serve-icon {
  font-size: 84px;
}
</style>
