<template>
  <div>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 4 : 2"
          class="rounded-lg transition-swing"
        >
          <div class="pa-4">
            <div
              v-if="blogTags"
              class="pl-4 pt-4"
            >
              <v-chip
                v-for="blogTag in blogTags"
                v-bind:key="blogTag"
                @click="toBlogByTag(blogTag)"
                class="mr-2 rounded-lg"
                color="primary"
                label
                small
              ><v-icon left x-small>fas fa-tag</v-icon>
                {{ blogTag }}
              </v-chip>
            </div>
            <span>
              <v-card-title
                :class="blogTags ? 'pt-2' : ''"
              >{{ blogTitle }}</v-card-title>
              <v-card-subtitle
                class="pb-0"
              >{{ blogDate }}, {{ blogAuthor }}</v-card-subtitle>
            </span>
            <v-card-text><MarkdownIt :content="blogContent" /></v-card-text>
          </div>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
import MarkdownIt from '@/components/Modal/MarkdownIt';

export default {
  name: 'BlogTweetCard',
  components: {
    MarkdownIt,
  },
  props: [
    'blogId', // 编号
    'blogTitle', // 题目
    'blogAuthor', // 作者
    'blogDate', // 日期
    'blogContent', // 内容
    'blogLocation', // 地点
    'blogLink', // 相关链接
    'blogTags', // 博客标签
  ],
  methods: {
    toBlogByTag(blogTag) {
      this.$router.push('/blog/tag/' + blogTag);
    },
  },
};
</script>
