<template>
  <div>
    <v-row>
      <v-col
        cols="6"
        sm="4"
        md="3"
        v-for="serve in serves"
        v-bind:key="serve.name"
        class="text-center"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 4 : 0"
            class="py-6 px-4 rounded-lg transition-swing clickable"
            @click.native="resolveServe(serve)"
          >
            <span>
              <v-icon
                class="serve-icon pb-4 mt-1"
                :color="serve.color ? serve.color : 'primary'"
                >{{ serve.icon }}</v-icon
              >
              <h3>{{ serve.name }}</h3>
              <small>{{ serve.intro }}</small>
            </span>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <CustomDialog :dialog="dnrsDialog" :closeDialog="closeDnrsDialog">
      <template v-slot:title>
        <div class="color-primary font-weight-bold">宿舍网络报修平台 - 微信端</div>
      </template>
      <template v-slot:content>
        <v-row>
          <v-col cols="6">
            <div><strong>沙河校区</strong>的网络用户请扫描此二维码</div>
            <v-img
              src="@/assets/dnrsQRCodeShahe.jpg"
              class="mt-2"
            />
          </v-col>
          <v-col cols="6">
            <!-- <div><strong>清水河校区</strong>的网络用户请扫描此二维码</div> -->
            <div><strong>清水河校区</strong>的网络用户二维码即将开放</div>
            <!-- <v-img
              src="@/assets/dnrsQRCodeQingshuihe.jpg"
              class="mt-2"
            /> -->
          </v-col>
        </v-row>
      </template>
    </CustomDialog>
  </div>
</template>

<script>
import CustomDialog from '@/components/Model/CustomDialog';

export default {
  name: 'Serves',
  components: {CustomDialog},
  data: () => ({
    dnrsDialog: false, // 点击 '宿舍网络报修' 服务后打开 dialog
    serves: [
      {
        name: '开源镜像站',
        icon: 'fas fa-compact-disc',
        intro: '成电开源镜像站',
        link: process.env.VUE_APP_MIRRORS_LINK,
      },
      {
        name: 'IPTV 直播',
        icon: 'fas fa-headset',
        intro: 'IPTV，好的 TV',
        link: process.env.VUE_APP_IPTV_LINK,
      },
      {
        name: '宿舍网络报修',
        icon: 'fas fa-tools',
        intro: '您的寝室生活救星',
      },
      {
        name: '在线文档',
        icon: 'fas fa-file-alt',
        intro: '使用 Markdown 写作与分享',
        link: process.env.VUE_APP_MARKDOWN_LINK,
      },
      {
        name: 'MINECRAFT',
        icon: 'fas fa-cube',
        intro: '是一款堆方块的沙盒游戏',
        link: process.env.VUE_APP_MINECRAFT_LINK,
      },
      {
        name: 'CAT ROOM',
        icon: 'fas fa-cat',
        intro: '摸鱼聊天留言板',
        route: process.env.VUE_APP_CATROOM_LINK,
      },
      // {
      //   name: '开源项目',
      //   icon: 'fas fa-code',
      //   intro: '共同促进开源社区发展',
      //   route: process.env.VUE_APP_PROJECT_LINK,
      // },
      {
        name: 'ISSUES',
        icon: 'fas fa-tasks',
        intro: 'Bug 提交/意见反馈',
        link: process.env.VUE_APP_ISSUES_LINK,
      },
    ],
  }),
  created() {
    //
  },
  methods: {
    resolveServe(serve) {
      switch (serve.name) {
        case '宿舍网络报修':
          this.dnrsDialog = true;
          break;
        default:
          if (serve.route != null && serve.route != '') {
            this.$router.push(serve.route);
          } else if (serve.link != null && serve.link != '') {
            this.$Utils.openExternalLink(serve.link);
          }
      }
    },
    closeDnrsDialog() {
      this.dnrsDialog = false;
    },
  },
};
</script>

<style scoped>
.serve-icon {
  font-size: 84px;
}
</style>
