<template>
  <v-snackbar
    dark
    v-model="snackbar"
    :color="snackbarColor"
    rounded="pill"
    :timeout="timeout"
    top
  >
    {{ snackbarText }}
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
    snackbarText: '',
    timeout: 2000,
  }),
  created() {
    this.snackbarColor = this.$vuetify.theme.themes.light.secondary;
  },
  mounted() {
    this.$Bus.$on('setSnackbar', (msg) => {
      // console.log('msg: ' + msg.text);
      // console.log('type: ' + msg.type);
      this.snackbarText = msg.text;
      switch (msg.type) {
        case 'info':
          this.snackbarColor = this.$vuetify.theme.themes.light
              .info;
          break;
        case 'success':
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
        default: this.snackbarColor = this.$vuetify.theme.themes.light
            .secondary;
      }
      this.snackbar = true;
    });
  },
};
</script>

<style scoped>

</style>
