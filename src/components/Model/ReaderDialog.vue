<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="600"
      @click:outside="clickOutsideCloseReaderDialog"
    >
      <v-card
        class="pa-4 rounded-t-lg rounded-b-0"
        @dblclick="dblClickCloseReaderDialog"
      >
        <div class="pa-0">
          <v-card-title
            :class="accentColorClass"
          >
            <span>{{ title }}</span>
          </v-card-title>
          <v-card-subtitle>
            {{ date }}, {{ author }}
            <div>
              <span v-if="type == 'news'">
                <v-chip
                  class="mt-2 mr-2 rounded-lg"
                  :color="accent ? accent : 'info'"
                  label
                  small
                >{{ newsTagText }}</v-chip>
                <v-chip
                  class="mt-2 mr-2 rounded-lg"
                  :color="accent ? accent : 'info'"
                  label
                  small
                ><v-icon left x-small>fas fa-comment-dots</v-icon>
                  {{ accentText }}
                </v-chip>
              </span>
              <span v-else-if="type == 'blog'">
                <v-chip
                  v-for="blogTag in blogTags"
                  v-bind:key="blogTag"
                  class="mt-2 mr-2 rounded-lg"
                  color="primary"
                  label
                  small
                ><v-icon left x-small>fas fa-tag</v-icon>
                  {{ blogTag }}
                </v-chip>
              </span>
              <v-chip
                v-if="location"
                class="mt-2 mr-2 rounded-lg"
                label
                outlined
                small
              ><v-icon left x-small>fas fa-map-marker-alt</v-icon>
                {{ location }}
              </v-chip>
              <v-chip
                v-if="link"
                class="mt-2 rounded-lg"
                @click="$Utils.openExternalLink(link)"
                label
                outlined
                small
              ><v-icon left x-small>fas fa-link</v-icon>
                相关链接
              </v-chip>
            </div>
          </v-card-subtitle>
          <v-card-text>
            <MarkdownIt :content="content" />
          </v-card-text>
        </div>
      </v-card>
      <v-toolbar class="dialog-bottom-toolbar" elevation="1">
        <v-spacer />
        <v-toolbar-items>
          <v-btn depressed @click="dialog = false"
            >关闭页面</v-btn
          >
        </v-toolbar-items>
      </v-toolbar>
    </v-dialog>
  </div>
</template>

<script>
import MarkdownIt from '@/components/Model/MarkdownIt';

export default {
  name: 'ReaderDialog',
  components: {
    MarkdownIt,
  },
  data: () => ({
    dialog: false,
    type: '',
    title: '',
    author: '',
    date: '',
    content: '',
    location: '',
    link: '',
    // 新闻公告
    newsTagText: '',
    accent: '',
    accentText: '',
    accentColorClass: '',
    // 博客文章
    blogTags: [],
  }),
  methods: {
    clickOutsideCloseReaderDialog() {
      this.$Bus.$emit('closeSnackbar');
      this.dialog = false;
    },
    dblClickCloseReaderDialog() {
      this.dialog = false;
      if (!localStorage.haveDblClickCloseReaderDialog) {
        this.$Bus.$emit('setSnackbar', {
          icon: 'fas fa-check-circle',
          text: '干得好！你总是可以使用双击关闭此类对话框。',
          type: 'success',
          timeout: 6000,
          verticalPosition: 'bottom',
        });
        localStorage.haveDblClickCloseReaderDialog = true;
      }
    },
  },
  mounted() {
    this.$Bus.$on('setReaderDialog', (msg) => {
      this.type = msg.type;
      this.title = msg.title;
      this.author = msg.author;
      this.date = msg.date;
      this.content = msg.content;
      this.location = msg.location;
      this.link = msg.link;

      if (this.type == 'news') {
        this.accent = this.$Utils.getNewsAccentFromText(msg.accent);
        this.accentText = this.$Utils.getNewsAccentText(msg.accent);
        this.accentColorClass = this.$Utils.getNewsAccentColorClass(msg.accent);
        this.newsTagText = this.$Utils.getNewsTagText(msg.newsTag);

        this.blogTags = [];
      } else if (this.type == 'blog') {
        this.blogTags = msg.blogTags;

        this.accent = '';
        this.accentText = '';
        this.accentColorClass = '';
        this.newsTagText = '';
      }
      this.dialog = true;
      // if (!localStorage.haveDblClickCloseReaderDialog) {
      //   this.$Bus.$emit('setSnackbar', {
      //     icon: 'fas fa-question-circle',
      //     text: '使用双击来关闭新闻公告窗口。',
      //     type: 'info',
      //     timeout: -1,
      //     verticalPosition: 'bottom',
      //   });
      // }
    });
  },
};
</script>

<style lang="scss" scoped>
.dialog-bottom-toolbar {
  position: sticky;
  width: 100%;
  z-index: 999;
  bottom: 0;
}
</style>
