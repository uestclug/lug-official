<template>
  <div>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 4 : 1"
          class="rounded-lg transition-swing mt-6"
          outlined
        >
          <v-card-title class="color-primary font-weight-bold">
            # WE NEED YOU
          </v-card-title>
          <v-card-text>
            我们是成立{{ existYear }}年的学生社团，积极参与高校开源社区活动，提供开源软件镜像等诸多服务。
          </v-card-text>
          <v-card-title> ## 我们要做的事 </v-card-title>
          <v-card-text>
            1. 推广 GNU/Linux 在校内外的使用。
            2. 协助维护开源镜像站等关键服务。
            3. 联合校内外爱好者
          </v-card-text>
          <v-card-title> ## 为何要加入我们 </v-card-title>
          <v-card-text>
            办公处所位置便利，电力与网络顺畅稳定；<br />
            内部藏书种类繁多，团建活动定期举办；<br />
            够用的服务器资源，助你实现天才想法；<br />
            零距离接触生产环境网络设备的有趣经验；<br />
            勤工助学有偿服务机会。
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="primary"
              :disabled="submitResumeLink == ''"
              @click="$Utils.openExternalLink(submitResumeLink)"
            >
              填写表单
            </v-btn>
            <v-btn
              text
              color="secondary"
              :disabled="recruitmentGroupLink == ''"
              @click="$Utils.openExternalLink(recruitmentGroupLink)"
            >
              了解更多
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-hover>
    <div>
      <v-btn class="mt-2 float-right" color="primary" text to="/about"
        >前往成员殿堂<v-icon right small>fas fa-street-view</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recruitment",
  data: () => ({
    existYear: "许多",
    submitResumeLink: process.env.VUE_APP_RECRUIT_LINK,
    recruitmentGroupLink: process.env.VUE_APP_RECRUIT_QQ_LINK,
  }),
  created() {
    // 计算成立时长
    this.existYear = " " + (new Date().getFullYear() - 2019) + " ";
  },
};
</script>
