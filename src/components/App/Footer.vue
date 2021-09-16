<template>
  <v-footer drak padless class="mt-9">
    <v-card
      flat
      tile
      width="100%"
      color="secondary"
      dark
      class="footer-content pb-12"
    >
      <v-img src="/favicon.png" class="footer-bg-icon" width="400px" />
      <v-row class="pt-6 pb-6">
        <v-col cols="12" sm="8" md="4">
          <v-card-title>ABOUT</v-card-title>
          <v-card-text>
            <span
              >UESTC LUG 是由电子科技大学 GNU/Linux
              使用者共同发起并运营的开放性组织</span
            >
            <span
              >，旨在宣传自由软件精神，为校内外 GNU/Linux
              爱好者提供活动的平台和机会，并为校内外用户提供便利。</span
            >
            <span>现阶段面向校内提供开源软件镜像等服务。</span>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card-title>CONTACT US</v-card-title>
          <v-card-text>
            <div class="mb-2">
              <a class="white--text" :href="link.mail">
                <v-icon dark left small>fas fa-envelope</v-icon>Email
              </a>
            </div>
            <div class="mb-2">
              <a
                class="white--text"
                @click="$Utils.openExternalLink(link.github)"
              >
                <v-icon dark left small>fab fa-github</v-icon>Github
              </a>
            </div>
            <div class="mb-2">
              <a
                class="white--text"
                @click="$Utils.openExternalLink(link.telegram)"
              >
                <v-icon dark left small>fab fa-telegram-plane</v-icon>Telegram
              </a>
            </div>
            <div class="mb-2">
              <a
                class="white--text"
                @click="$Utils.openExternalLink(link.uestcLug)"
              >
                <v-icon dark left small>fab fa-linux</v-icon>UESTC LUG
              </a>
            </div>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card-title>FIND US</v-card-title>
          <v-card-text>
            <div class="mb-2">
              <a
                class="white--text"
                :href="require('../../assets/locationShahe.jpg')"
                target="_blank"
                >电子科技大学沙河校区 阳光餐厅后</a
              >
            </div>
            <div class="mb-2">
              <a
                class="white--text"
                :href="require('../../assets/locationQingshuihe.jpg')"
                target="_blank"
                >电子科技大学清水河校区 第九组团 27 栋下</a
              >
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    link: {
      mail: process.env.VUE_APP_MAIL_LINK,
      github: process.env.VUE_APP_GITHUB_LINK,
      telegram: process.env.VUE_APP_TELEGRAM_LINK,
      uestcLug: process.env.VUE_APP_UESTCLUG_LINK,
    },
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.footer-content {
  overflow: hidden;
}

.footer-bg-icon {
  position: absolute !important;
  left: 0;
  top: 0;
  opacity: 0.25;
}
</style>
