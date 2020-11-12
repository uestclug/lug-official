<template>
  <v-alert
    type="info"
    dismissible
    v-model="alert"
  >
    Hi，您当前处于开发环境。所有的数据将使用预设值，并模仿生产环境的行为。
  </v-alert>
</template>

<script>
export default {
  name: 'DevModeAlert',
  data: () => ({
    alert: false,
  }),
  created() {
    if (this.$DevMode) {
      if (sessionStorage.devModeAlertDismiss) {
        return;
      }
      this.alert = true;
    }
  },
  watch: {
    alert(val) {
      if (val == false) {
        sessionStorage.devModeAlertDismiss = true;
      }
    },
  },
};
</script>

<style>

</style>
