<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="600"
      @click:outside="clickOutsideCloseReaderDialog"
    >
      <v-card
        class="rounded-lg pt-4 pb-4"
        @dblclick="dblClickCloseReaderDialog"
      >
        <div class="pl-2 pr-2">
          <v-card-title
            :class="accentColorClass"
          >
            <span>{{ title }}</span>
          </v-card-title>
          <v-card-subtitle class="pb-0">
            {{ date }}, {{ author }}
            <div>
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
        </div>
        <div class="pl-2 pr-2">
          <v-card-text>
            <MarkdownIt :content="content" />
          </v-card-text>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MarkdownIt from '@/components/Modal/MarkdownIt';

export default {
  name: 'ReaderDialog',
  components: {
    MarkdownIt,
  },
  data: () => ({
    dialog: false,
    title: '',
    author: '',
    date: '',
    content: '',
    location: '',
    link: '',
    accent: '',
    accentText: '',
    accentColorClass: '',
    // 新闻公告
    newsTagText: '',
  }),
  methods: {
    clickOutsideCloseReaderDialog() {
      this.dialog = false;
      this.$Bus.$emit('closeSnackbar');
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
    initRoutePath() {
      const url = window.location.href;
      const index = url.lastIndexOf('/');
      window.history.pushState('', '', url.substring(0, index + 1));
    },
  },
  watch: {
    // 当 ReaderDialog 关闭时，移除路径栏可能出现的锚点值
    dialog(val) {
      if (!val) {
        this.initRoutePath();
      }
    },
  },
  mounted() {
    this.$Bus.$on('setReaderDialog', (msg) => {
      this.title = msg.title;
      this.author = msg.author;
      this.date = msg.date;
      this.content = msg.content;
      this.location = msg.location;
      this.link = msg.link;
      this.accent = msg.accent;
      this.accentText = this.$Utils.getNewsAccentText(msg.accent);
      this.accentColorClass = msg.accentColorClass;
      this.newsTagText = this.$Utils.getNewsTagText(msg.newsTag);
      this.dialog = true;
      if (!localStorage.haveDblClickCloseReaderDialog) {
        this.$Bus.$emit('setSnackbar', {
          icon: 'fas fa-question-circle',
          text: '使用双击来关闭新闻公告窗口。',
          type: 'info',
          timeout: -1,
          verticalPosition: 'bottom',
        });
      }
    });
  },
};
</script>
