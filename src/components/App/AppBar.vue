<template>
  <div>
    <v-app-bar
      app
      color="white"
      class="app-bar-content"
      fixed
      elevate-on-scroll
    >
      <div
        class="app-bar-title pt-1 clickable"
        @click="routeToHome"
      >
        <v-icon class="app-bar-title-icon">fab fa-vuejs</v-icon>
        <span class="app-bar-title-text">UESTC NETUNION</span>
      </div>

      <v-spacer></v-spacer>

      <div class="d-none d-md-flex">
        <v-btn-toggle
          color="primary"
          group
          dense
          tile
          max="1"
        >
          <v-btn
            v-for="route in routes"
            :key="route.name"
            :to="route.path"
          >{{ route.name }}</v-btn>
        </v-btn-toggle>

        <v-divider
          inset
          vertical
          class="mb-2"
        ></v-divider>

        <v-btn
          text
          tile
          height="34px"
          class="link-actions"
          v-for="link in links"
          :key="link.name"
          :href="link.path"
          target="_blank"
        >{{ link.name }}
          <v-icon
            right
            small
          >fas fa-external-link-alt</v-icon>
        </v-btn>
      </div>

      <div class="d-sm-flex d-md-none">
        <v-menu>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>fas fa-ellipsis-v</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="route in routes"
                :key="route.name"
                router-link
                :to="route.path"
              >
                <v-list-item-title v-text="route.name"></v-list-item-title>
              </v-list-item>
            </v-list-item-group>
            <v-list-item
              v-for="link in links"
              :key="link.name"
              :href="link.path"
              target="_blank"
            >
              <v-list-item-title v-text="link.name"></v-list-item-title>
              <v-icon
                right
                small
              >fas fa-external-link-alt</v-icon>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    routes: [
      {name: 'HOME', path: '/'},
      {name: 'BLOG', path: '/blog'},
      {name: 'CHAT', path: '/chat'},
    ],
    links: [
      {name: 'MIRRORS', path: 'https://www.google.com'},
    ],
  }),
  methods: {
    routeToHome() {
      this.$Bus.$emit('routeTo', '/');
    },
  },
};
</script>

<style scoped>
  .app-bar-title {
    color: #464646;
  }
  .app-bar-title-icon {
    margin-right: 1rem;
    margin-bottom: 6px;
  }
  .app-bar-title-text {
    font-size: 18px;
  }
  .link-actions {
    margin-left: 6px;
    margin-top: 5px;
  }
</style>
