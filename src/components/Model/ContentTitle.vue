<template>
  <h1 class="mt-6 mb-3">
    <v-icon class="content-title-icon mr-2 mb-2" v-if="icon">{{ icon }}</v-icon>
    <span
      >{{ title }}<small>{{ subtitle }}</small></span
    >
  </h1>
</template>

<script>
export default {
  name: "ContentTitle",
  data: () => ({
    //
  }),
  props: ["icon", "title", "subtitle"],
};
</script>

<style scoped>
.content-title-icon {
  font-size: 28px;
}
</style>
