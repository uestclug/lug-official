<template>
  <v-fab-transition>
    <v-btn
      fixed
      fab
      dark
      bottom
      right
      color="primary"
      class="mb-3"
      v-show="scrollVal > 300"
      @click="backToTop"
    >
      <v-icon dark>mdi-arrow-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "FloatButton",
  data: () => ({
    scrollVal: 0,
  }),
  methods: {
    onScroll() {
      this.scrollVal = window.pageYOffset;
    },
    backToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
