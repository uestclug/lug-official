<template>
  <div>
    <v-card
      class="rounded-lg"
    >
      <v-list>
        <v-list-item
          link
          to="/blog"
          exact
          color="primary"
        >
          <v-list-item-title>All</v-list-item-title>
        </v-list-item>

        <v-divider class="ma-1" />

        <v-subheader>
          <v-icon x-small class="mr-1">fas fa-tags</v-icon>
          <span>Tags</span>
        </v-subheader>
        <v-list-item
          v-for="tagItem in tagItems"
          :key="tagItem.name"
          link
          :to="toBlogByTag(tagItem.name)"
          exact
          dense
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title>{{ tagItem.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            {{ tagItem.blogCount }}
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'BlogNavigation',
  data: () => ({
    navItems: [
      {
        title: 'Tags',
        icon: 'fas fa-home',
      },
    ],
    tagItems: [
      {
        name: 'Enjoy',
        blogCount: 13,
      },
      {
        name: 'Development',
        blogCount: 2,
      },
    ],
  }),
  methods: {
    toBlogByTag(blogTag) {
      return '/blog/tag/' + blogTag;
    },
  },
};
</script>
