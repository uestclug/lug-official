<template>
  <MarkdownItVue :content="content" :options="mdOptions" />
</template>

<script>
import MarkdownItVue from 'markdown-it-vue';
import 'markdown-it-vue/dist/markdown-it-vue.css';

export default {
  name: 'MarkdownIt',
  components: {
    MarkdownItVue,
  },
  data: () => ({
    mdOptions: {
      markdownIt: {
        breaks: true,
        typographer: true,
      },
    },
  }),
  props: [
    'content',
  ],
};
</script>
