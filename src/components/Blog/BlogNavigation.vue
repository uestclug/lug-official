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
    tagItems: [],
  }),
  methods: {
    toBlogByTag(blogTag) {
      return '/blog/tag/' + blogTag;
    },
    tagSortByBlogCount(a, b) {
      return b.blogCount - a.blogCount;
    },
  },
  created() {
    const blogTagsArray = [];

    for (let i = 0; i < this.$Blogs.length; i++) {
      blogTagsArray.push(this.$Blogs[i].tags);
    }

    const tagItems = [];

    for (let i = 0; i < blogTagsArray.length; i++) {
      const tags = blogTagsArray[i];
      for (let n = 0; n < tags.length; n++) {
        // 遍历 tags 数组的每一项标签
        let index = -1;
        for (let m = 0; m < tagItems.length; m++) {
          // 寻找 tagItems 与标签相同的 name 存在
          if (tagItems[m].name == tags[n]) {
            index = m;
          }
        }
        if (index == -1) { // tagItems 不包含该 tag 时
          tagItems.push({
            name: tags[n],
            blogCount: 1,
          });
        } else { // 该 tag 存在于 tagItems 时
          tagItems[index].blogCount += 1;
        };
      }
    }
    tagItems.sort(this.tagSortByBlogCount);

    this.tagItems = tagItems;
  },
};
</script>
