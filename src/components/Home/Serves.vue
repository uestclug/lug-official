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
      <v-icon
        class="clickable serve-icon pb-4"
        color="primary"
      >{{ serve.icon }}</v-icon>
      <h3
        class="clickable"
      >{{ serve.name }}</h3>
      <small>{{ serve.intro }}</small>
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
        path: '',
      },
      {
        name: 'IPTV 直播',
        icon: 'fas fa-headset',
        intro: 'IPTV，好的 TV',
        path: '',
      },
      {
        name: '宿舍网络报修',
        icon: 'fas fa-tools',
        intro: '您的寝室生活救星',
        path: '',
      },
      {
        name: 'CAT ROOM',
        icon: 'fas fa-cat',
        intro: '摸鱼聊天留言板',
        path: '',
      },
      {
        name: 'ISSUES',
        icon: 'fas fa-tasks',
        intro: 'Bug 提交/意见反馈',
        path: '',
      },
      {
        name: '',
        icon: '',
        intro: '',
        path: '',
      },
    ],
  }),
};
</script>

<style scoped>
.serve-icon {
  font-size: 84px;
}
</style>
