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
      <v-btn
        dark
        text
        rounded
        v-bind="attrs"
        @click="snackbar = false"
      >
        关闭
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',
  data: () => ({
    snackbar: false,
    snackbarColor: '',
    snackbarIcon: '',
    snackbarText: '',
    timeout: 2000,
    verticalPosition: 'top',
    horizontalPosition: '',
  }),
  created() {
    this.snackbarColor = this.$vuetify.theme.themes.light.secondary;
  },
  mounted() {
    this.$Bus.$on('setSnackbar', (msg) => {
      // console.log('msg: ' + msg.text);
      // console.log('type: ' + msg.type);
      if (msg.timeout != null && msg.timeout != '') {
        this.timeout = msg.timeout;
      } else {
        this.timeout = 2000;
      }
      if (msg.icon != null) {
        this.snackbarIcon = msg.icon;
      } else {
        this.snackbarIcon = '';
      }
      if (msg.verticalPosition != null && msg.verticalPosition != '') {
        this.verticalPosition = msg.verticalPosition;
      } else {
        this.verticalPosition = 'top';
      }
      if (msg.horizontalPosition != null) {
        this.horizontalPosition = msg.horizontalPosition;
      } else {
        this.horizontalPosition = '';
      }

      this.snackbarText = msg.text;
      switch (msg.type) {
        case 'info':
          this.snackbarColor = this.$vuetify.theme.themes.light
              .info;
          break;
        case 'success':
          this.snackbarColor = this.$vuetify.theme.themes.light
              .success;
          break;
        case 'primary':
          this.snackbarColor = this.$vuetify.theme.themes.light
              .primary;
          break;
        case 'accent':
          this.snackbarColor = this.$vuetify.theme.themes.light
              .accent;
          break;
        case 'warning':
          this.snackbarColor = this.$vuetify.theme.themes.light
              .warning;
          break;
        case 'error':
          this.snackbarColor = this.$vuetify.theme.themes.light
              .error;
          break;
        default:
          this.snackbarColor = this.$vuetify.theme.themes.light
              .secondary;
      }
      this.snackbar = true;
    });
    this.$Bus.$on('closeSnackbar', (msg) => {
      this.snackbar = false;
    });
  },
};
</script>

<style scoped>
</style>
