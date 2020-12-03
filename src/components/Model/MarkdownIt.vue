<template>
  <div>
    <div v-if="!rendered" class="text-center ma-6">
      <v-btn text loading disabled></v-btn>
      <p>正在加载中，请稍后...</p>
    </div>
    <div v-else v-html="htmlContent" class="markdown-body" />
  </div>
</template>

<script>
const mdContainer = require('markdown-it-container');
const mdEmoji = require('markdown-it-emoji');
const mdHighlight = require('highlight.js');
const mdSub = require('markdown-it-sub');
const mdSup = require('markdown-it-sup');
const mdTaskLists = require('markdown-it-task-lists');
const twemoji = require('twemoji');
import 'github-markdown-css';

const md = require('markdown-it')({
  linkify: false,
  breaks: false,
  typographer: true,
  highlight: function(str, lang) {
    if (lang && mdHighlight.getLanguage(lang)) {
      try {
        return mdHighlight.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  },
});
md.use(mdContainer, 'spoiler');
md.use(mdEmoji);
md.use(mdSub);
md.use(mdSup);
md.use(mdTaskLists, {enabled: true});
md.renderer.rules.mdEmoji = function(token, idx) {
  return twemoji.parse(token[idx].content);
};

export default {
  name: 'MarkdownIt',
  data: () => ({
    htmlContent: '',
    rendered: false,
  }),
  props: [
    'content',
  ],
  methods: {
    renderHtmlContent() {
      this.htmlContent = md.render(this.content);
      this.rendered = true;
    },
  },
  created() {
    this.renderHtmlContent();
  },
  watch: {
    content() {
      this.rendered = false;
      this.renderHtmlContent();
    },
  },
};
</script>
