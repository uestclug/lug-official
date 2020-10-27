<template>
  <div>
    <v-footer
      app
      absolute
      drak
      padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="footer-content grey darken-4 white--text"
      >
        <v-row class="pt-6 pb-6">
          <v-col cols="12" sm="12" md="4">
            <v-card-title>ABOUT</v-card-title>
            <v-card-text>
              <span>电子科技大学 NETUNION 协会，又名电子科技大学网管会，</span>
              <span>由一群网络技术和开源软件和 Linux 爱好者、技术宅所组成。</span>
              <span>现阶段面向校内提供开源软件镜像、IPTV、宿舍网络在线报修等服务。</span>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card-title>CONTACT US</v-card-title>
            <v-card-text>
              <div class="mb-2">
                <a
                  class="white--text"
                >
                  <v-icon dark left small>fas fa-envelope</v-icon>Email
                </a>
              </div>
              <div class="mb-2">
                <a
                  @click="$Utils.openExternalLink('https://github.com/uestclug')"
                  class="white--text"
                >
                  <v-icon dark left small>fab fa-github</v-icon>Github
                </a>
              </div>
              <div class="mb-2">
                <a
                  class="white--text"
                >
                  <v-icon dark left small>fab fa-telegram-plane</v-icon>Telegram
                </a>
              </div>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card-title>FIND US</v-card-title>
            <v-card-text>
              <div class="mb-2">
                <span>电子科技大学沙河校区阳光餐厅后</span>
              </div>
              <div class="mb-2">
                <span>电子科技大学清水河校区第 X 组团下</span>
              </div>
            </v-card-text>
          </v-col>
        </v-row>

        <v-divider class="grey darken-3" />

        <v-card-text class="white--text text-center">
          <strong>NETUNION</strong> {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    //
  }),
};
</script>
