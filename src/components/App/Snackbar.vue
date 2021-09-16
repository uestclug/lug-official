<template>
  <v-snackbar
    dark
    v-model="snackbar"
    :color="snackbarColor"
    rounded="pill"
    :timeout="timeout"
    :top="verticalPosition == 'top' ? true : false"
    :bottom="verticalPosition == 'bottom' ? true : false"
    :left="horizontalPosition == 'left' ? true : false"
    :right="horizontalPosition == 'right' ? true : false"
  >
    <v-icon left small>{{ snackbarIcon }}</v-icon>
    <span>{{ snackbarText }}</span>
    <template v-slot:action="{ attrs }">
      <v-btn dark text rounded v-bind="attrs" @click="snackbar = false">
        关闭
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  data: () => ({
    snackbar: false,
    snackbarColor: "",
    snackbarIcon: "",
    snackbarText: "",
    timeout: 2000,
    verticalPosition: "top",
    horizontalPosition: "",
  }),
  methods: {
    initSnackbar() {
      this.snackbarColor = "";
      this.snackbarIcon = "";
      this.snackbarText = "";
      this.timeout = 3000;
      this.verticalPosition = "top";
      this.horizontalPosition = "";
    },
    refreshTimeout(timeout) {
      this.timeout = -1;
      this.$nextTick(() => {
        this.timeout = timeout;
      });
    },
  },
  created() {
    this.snackbarColor = this.$vuetify.theme.themes.light.secondary;
  },
  mounted() {
    this.$Bus.$on("setSnackbar", (msg) => {
      // 设置关闭时间
      const timeout = msg.timeout || 3000;
      this.refreshTimeout(timeout);

      // 设置 icon
      this.snackbarIcon = msg.icon || "";

      // 设置垂直位置
      this.verticalPosition = msg.verticalPosition || "top";

      // 设置水平位置
      this.horizontalPosition = msg.horizontalPosition || "";

      // 设置值
      this.snackbarText = msg.text || "";

      // 设置强调颜色
      switch (msg.type) {
        case "info":
          this.snackbarColor = this.$vuetify.theme.themes.light.info;
          break;
        case "success":
          this.snackbarColor = this.$vuetify.theme.themes.light.success;
          break;
        case "primary":
          this.snackbarColor = this.$vuetify.theme.themes.light.primary;
          break;
        case "accent":
          this.snackbarColor = this.$vuetify.theme.themes.light.accent;
          break;
        case "warning":
          this.snackbarColor = this.$vuetify.theme.themes.light.warning;
          break;
        case "error":
          this.snackbarColor = this.$vuetify.theme.themes.light.error;
          break;
        default:
          // 默认为 secondary
          this.snackbarColor = this.$vuetify.theme.themes.light.secondary;
      }
      this.snackbar = true;
    });

    this.$Bus.$on("closeSnackbar", () => {
      this.snackbar = false;
    });
  },
};
</script>

<style scoped></style>
