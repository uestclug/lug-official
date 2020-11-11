<template>
  <div>
    <SimpleNotes v-if="tokenAdminChecking" title="为您准备编辑器中"
        icon="fas fa-edit" primaryText="Netunion 的成员可以自由编写与修改新闻和博客"
        secondaryText="正在为您准备 Editor 编辑器，请稍后..." button="hide" />
    <div v-else class="mt-6 mb-6">
      <ValidationObserver ref="observer">
        <v-form
          class="content"
          autocomplete="off"
        >
          <v-row>
            <v-col cols="3" class="pa-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="归档"
                rules="selectionRequired|oneOf:新闻公告 / News,博客文章 / Blog"
              >
                <v-select
                  v-model="tweet.type"
                  :items="tweetTypes"
                  :error-messages="errors"
                  :disabled="type ? true : false"
                  label="归档 / Type"
                  outlined
                  hint="推送发布后将不能再修改归档"
                  :persistent-hint="tweet.type != '' && !type"
                ></v-select>
              </ValidationProvider>
            </v-col>
            <v-col cols="9" class="pa-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="标题"
                rules="contentRequired"
              >
                <v-text-field
                  v-model="tweet.title"
                  :counter="30"
                  :error-messages="errors"
                  label="标题 / Title"
                  outlined
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col v-if="tweet.type == '新闻公告 / News'" cols="3" class="pa-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="标签"
                rules="selectionRequired"
              >
                <v-select
                  v-model="tweetNews.tag"
                  :items="tweetNewsTags"
                  :error-messages="errors"
                  :disabled="type ? true : false"
                  label="标签 / Tag"
                  outlined
                  hint="推送发布后将不能再修改标签"
                  :persistent-hint="tweetNews.tag != '' && !type"
                ></v-select>
              </ValidationProvider>
            </v-col>
            <v-col v-if="tweet.type == '新闻公告 / News'" cols="3" class="pa-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="强调"
                rules="selectionRequired"
              >
                <v-select
                  v-model="tweetNews.accent"
                  :items="tweetNewsAccents"
                  :error-messages="errors"
                  label="强调 / Accent"
                  outlined
                  :color="$Utils.getNewsAccentFromText(tweetNews.accent)"
                ></v-select>
              </ValidationProvider>
            </v-col>
            <v-col v-if="tweet.type == '博客文章 / Blog'" cols="6" class="pa-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="博客标签"
                rules="blogTagsInput"
              >
                <v-text-field
                  v-model="tweetBlogInputTags"
                  :error-messages="errors"
                  label="标签 / Tags"
                  hint="不同标签之间使用 # 隔开"
                  outlined
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col v-if="tweet.type" cols="6" class="pa-1">
              <v-text-field
                v-model="tweet.location"
                label="相关地点 / Location"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="推送"
                rules="contentRequired"
              >
                <v-textarea
                  v-model="tweet.content"
                  :error-messages="errors"
                  label="推送内容 / Tweet Content"
                  auto-grow
                  hint="推荐使用 Markdown 语法"
                  rows="10"
                  outlined
                ></v-textarea>
              </ValidationProvider>
            </v-col>
            <v-col cols="12" class="pa-1">
              <v-text-field
                v-model="tweet.link"
                label="相关链接 / Link"
                hint="站外链接请使用 https:// 或 http:// 开头"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <div class="mt-2 text-end">
            <v-btn
              @click="submitEditor"
              class="mt-2"
              color="primary"
            >{{ (type && id) ? '保存修改' : '发布推送' }}</v-btn>
            <v-btn
              :disabled="tweet.type == '' || tweet.title == '' ||
                  tweet.content == ''"
              class="mt-2 ml-4"
              @click="previewTweet"
              depressed
            >预览推送</v-btn>
            <v-btn
              v-if="type && id"
              class="mt-2 ml-4"
              @click="resetEditor"
              depressed
            >还原推送</v-btn>
          </div>
        </v-form>
      </ValidationObserver>
    </div>
    <div class="text-center">
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
  </div>
</template>

<script>
import SimpleNotes from '@/components/Model/SimpleNotes';

import {required} from 'vee-validate/dist/rules';
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
} from 'vee-validate';

// Does not validate unless validate is called explicitly.
setInteractionMode('eager');

extend('contentRequired', {
  ...required,
  message: '您需要填写 {_field_} 的内容',
});

extend('selectionRequired', {
  ...required,
  message: '您需要选择 {_field_} 项目',
});

extend('oneOf', (value, values) => {
  if (values.indexOf(value) !== -1) {
    return true;
  }

  return '我们无法验证您选择的项目';
});

extend('blogTagsInput', (value) => {
  if (value.indexOf(' ') !== -1) {
    return '标签里不能包含空格';
  }
  return true;
});

export default {
  name: 'Editor',
  components: {
    SimpleNotes,
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    tokenAdminChecking: true,
    tweetTypes: [],
    tweetBlogInputTags: '',
    tweetNewsAccents: [],
    tweetNewsTags: [],
    // 新建的 tweet 内容
    tweet: {
      type: '',
      title: '',
      content: '',
      location: '',
      link: '',
    },
    tweetBlog: {
      tags: [],
    },
    tweetNews: {
      accent: '',
      tag: '',
    },
    // 修改前的 tweet 内容
    originalTweet: {
      type: '',
      title: '',
      content: '',
      location: '',
      link: '',
    },
    originalTweetBlog: {
      tags: [],
    },
    originalTweetNews: {
      accent: '',
      tag: '',
    },
    // 提交时的加载层
    overlay: false,
  }),
  props: [
    'type',
    'id',
  ],
  methods: {
    previewTweet() {
      this.$refs.observer.validate();
      if (this.$refs.observer.flags.invalid) {
        return;
      }
      switch (this.tweet.type) {
        case '新闻公告 / News':
          this.$Bus.$emit('setReaderDialog', {
            type: 'news',
            title: this.tweet.title,
            date: new Date().toLocaleDateString(),
            author: localStorage.username,
            content: this.tweet.content,
            location: this.tweet.location,
            link: this.tweet.link,
            accent: this.tweetNews.accent,
            newsTag: this.tweetNews.tag,
          });
          break;
        case '博客文章 / Blog':
          this.$Bus.$emit('setReaderDialog', {
            type: 'blog',
            title: this.tweet.title,
            date: new Date().toLocaleDateString(),
            author: localStorage.username,
            content: this.tweet.content,
            location: this.tweet.location,
            link: this.tweet.link,
            blogTags: this.tweetBlog.tags,
          });
          break;
        default:
          //
      }
    },
    submitEditor() {
      this.$refs.observer.validate();
      if (this.$refs.observer.flags.invalid) { // 表单含有不合法项，返回
        return;
      }

      if (this.type && this.id) { // 修改推送模式
        const confirm = window.confirm('您将更新此推送的内容，确定继续吗？');
        if (!confirm) { // 取消提交
          return;
        }

        this.overlay = true; // 设置 overlay 加载
        if (this.$DevMode) { // 开发者模式
          console.log('提交修改推送请求');
          setTimeout(() => {
            this.$Bus.$emit('setSnackbar', {
              text: '成功修改推送！',
              type: 'info',
            });
            this.overlay = false;
            this.$router.push({path: '/'});
          }, 2000);
        } else { // 产品模式
          if (this.type == 'news') {
            this.axios.post('/editor/modifyNewsTweet', {
              newsId: this.id,
              newsAccent: this.$Utils
                  .getNewsAccentFromText(this.tweetNews.accent),
              newsTitle: this.tweet.title,
              newsContent: this.tweet.content,
              newsLocation: this.tweet.location,
              newsLink: this.tweet.link,
            }).then((Response) => {
              // console.log(Response);
              if (Response.data.code == 200) {
                this.$Bus.$emit('setSnackbar', {
                  text: '成功修改新闻公告推送！',
                  type: 'info',
                });
                this.overlay = false;
                this.$router.push({path: '/'});
              } else {
                this.$Bus.$emit('setSnackbar', {
                  text: '修改新闻公告推送失败，请稍后尝试',
                  type: 'error',
                });
                this.overlay = false;
              }
            });
          } else if (this.type == 'blog') {
            this.axios.post('/editor/modifyBlogTweet', {
              blogId: this.id,
              blogTags: this.tweetBlog.tags,
              blogTitle: this.tweet.title,
              blogContent: this.tweet.content,
              blogLocation: this.tweet.location,
              blogLink: this.tweet.link,
            }).then((Response) => {
              // console.log(Response);
              if (Response.data.code == 200) {
                this.$Bus.$emit('setSnackbar', {
                  text: '成功修改博客文章推送！',
                  type: 'info',
                });
                this.overlay = false;
                this.$router.push({path: '/'});
              } else {
                this.$Bus.$emit('setSnackbar', {
                  text: '修改博客文章推送失败，请稍后尝试',
                  type: 'error',
                });
                this.overlay = false;
              }
            });
          }
        }
      } else { // 新建推送模式
        const confirm = window.confirm('您将发布此推送，确定继续吗？');
        if (!confirm) { // 取消提交
          return;
        }

        this.overlay = true; // 设置 overlay 加载
        if (this.$DevMode) { // 开发者模式
          console.log('提交新建推送请求');
          setTimeout(() => {
            this.$Bus.$emit('setSnackbar', {
              text: '成功发布推送！',
              type: 'success',
            });
            this.overlay = false;
            this.$router.push({path: '/'});
          }, 2000);
        } else { // 产品模式
          if (this.tweet.type == '新闻公告 / News') {
            this.axios.post('/editor/createNewsTweet', {
              newsTag: this.$Utils
                  .getNewsTagFromText(this.tweetNews.tag),
              newsAccent: this.$Utils
                  .getNewsAccentFromText(this.tweetNews.accent),
              newsTitle: this.tweet.title,
              newsContent: this.tweet.content,
              newsLocation: this.tweet.location,
              newsLink: this.tweet.link,
            }).then((Response) => {
              // console.log(Response);
              if (Response.data.code == 200) {
                this.$Bus.$emit('setSnackbar', {
                  text: '成功发布新闻公告推送！',
                  type: 'success',
                });
                this.overlay = false;
                this.$router.push({path: '/'});
              } else {
                this.$Bus.$emit('setSnackbar', {
                  text: '发布新闻公告推送失败，请稍后尝试',
                  type: 'error',
                });
                this.overlay = false;
              }
            });
          } else if (this.tweet.type == '博客文章 / Blog') {
            this.axios.post('/editor/createBlogTweet', {
              blogTags: this.tweetBlog.tags,
              blogTitle: this.tweet.title,
              blogContent: this.tweet.content,
              blogLocation: this.tweet.location,
              blogLink: this.tweet.link,
            }).then((Response) => {
              // console.log(Response);
              if (Response.data.code == 200) {
                this.$Bus.$emit('setSnackbar', {
                  text: '成功发布博客文章推送！',
                  type: 'success',
                });
                this.overlay = false;
                this.$router.push({path: '/'});
              } else {
                this.$Bus.$emit('setSnackbar', {
                  text: '发布博客文章推送失败，请稍后尝试',
                  type: 'error',
                });
                this.overlay = false;
              }
            });
          } else {
            return;
          }
        }
      }
    },
    resetEditor() { // 还原内容为修改前的 tweet 内容
      const confirm = window.confirm('您将还原所有修改内容，确定继续吗？');
      if (!confirm) { // 取消提交
        return;
      }
      // console.log('还原推送修改');

      if (this.type == 'news') {
        this.tweet = JSON.parse(sessionStorage.originalTweet);
        this.tweetNews = JSON.parse(sessionStorage.originalTweetNews);
      } else if (this.type == 'blog') {
        this.tweet = JSON.parse(sessionStorage.originalTweet);
        this.tweetBlog = JSON.parse(sessionStorage.originalTweetBlog);

        const blogTagsArray = this.tweetBlog.tags;
        const blogTagsValue = blogTagsArray.join('#');
        this.tweetBlogInputTags = blogTagsValue;
      } else {
        console.log('type error');
        return false;
      }
    },
  },
  created() {
    if (this.type && this.id) {
      if (this.type != 'news' && this.type != 'blog') { // 路由错误，返回首页
        this.$router.push({path: '/'});
      }
    }

    // 初始化选择项值
    this.tweetTypes = this.$Common.tweet.typeText;
    this.tweetNewsAccents = this.$Common.tweet.news.accentText;
    this.tweetNewsTags = this.$Common.tweet.news.tagText;

    if (this.type && this.id) { // 路由包含 type 和 id 时，进入修改模式
      if (this.$DevMode) { // 开发者模式
        switch (this.type) {
          case 'news':
            this.originalTweet.type = '新闻公告 / News';
            this.originalTweetNews.tag = '镜像站';

            sessionStorage.originalTweet =
                JSON.stringify(this.originalTweet);
            sessionStorage.originalTweetNews =
                JSON.stringify(this.originalTweetNews);

            this.tweet = this.originalTweet;
            this.tweetNews = this.originalTweetNews;
            break;
          case 'blog':
            this.originalTweet.type = '博客文章 / Blog';

            sessionStorage.originalTweet =
                JSON.stringify(this.originalTweet);

            this.tweet = this.originalTweet;
            break;
          default:
            this.$router.push({path: '/'});
            return;
        }
        setTimeout(() => {
          this.tokenAdminChecking = false;
        }, 1000);
      } else { // 产品模式
        this.axios.post('/users/checkTokenAdmin').then((Response) => {
          if (Response.data.code == 200) { // 管理员 token 验证成功
            // 从数据库读取修改前的推送内容
            switch (this.type) {
              case 'news':
                this.axios.post('/editor/getOriginalNewsTweet', {
                  newsId: this.id,
                }).then((Response) => {
                  // console.log(Response.data);
                  if (Response.data.code == 200) {
                    const newsItem = Response.data.result;
                    this.originalTweet.type = '新闻公告 / News';
                    this.originalTweet.title = newsItem.newsTitle;
                    this.originalTweet.content = newsItem.newsContent;
                    this.originalTweet.location = newsItem.newsLocation;
                    this.originalTweet.link = newsItem.newsLink;
                    this.originalTweetNews.tag =
                        this.$Utils.getNewsTagText(newsItem.newsTag);
                    this.originalTweetNews.accent =
                        this.$Utils.getNewsAccentText(newsItem.newsAccent);

                    sessionStorage.originalTweet =
                        JSON.stringify(this.originalTweet);
                    sessionStorage.originalTweetNews =
                        JSON.stringify(this.originalTweetNews);

                    this.tweet = this.originalTweet;
                    this.tweetNews = this.originalTweetNews;
                    this.tokenAdminChecking = false;
                  } else { // 未能成功获取新闻公告
                    this.$router.push({path: '/'});
                  }
                });
                break;
              case 'blog':
                this.axios.post('/editor/getOriginalBlogTweet', {
                  blogId: this.id,
                }).then((Response) => {
                  // console.log(Response.data);
                  if (Response.data.code == 200) {
                    const blogItem = Response.data.result;
                    this.originalTweet.type = '博客文章 / Blog';
                    this.originalTweet.title = blogItem.blogTitle;
                    this.originalTweet.content = blogItem.blogContent;
                    this.originalTweet.location = blogItem.blogLocation;
                    this.originalTweet.link = blogItem.blogLink;
                    this.originalTweetBlog.tags = blogItem.blogTags;

                    sessionStorage.originalTweet =
                        JSON.stringify(this.originalTweet);
                    sessionStorage.originalTweetBlog =
                        JSON.stringify(this.originalTweetBlog);

                    this.tweet = this.originalTweet;
                    this.tweetBlog = this.originalTweetBlog;

                    const blogTagsArray = this.tweetBlog.tags;
                    const blogTagsValue = blogTagsArray.join('#');
                    this.tweetBlogInputTags = blogTagsValue;

                    this.tokenAdminChecking = false;
                  } else { // 未能成功获取新闻公告
                    this.$router.push({path: '/'});
                  }
                });
                break;
              default: // 类型校验错误
                this.$router.push({path: '/'});
                return;
            }
          } else {
            return;
          }
        });
      }
    } else { // 路由不含 type 及 id 时，进入新建推送模式
      if (this.$DevMode) { // 开发者模式
        setTimeout(() => {
          this.tokenAdminChecking = false;
        }, 1000);
      } else { // 产品模式
        this.axios.post('/users/checkTokenAdmin').then((Response) => {
          if (Response.data.code == 200) { // 管理员 token 验证成功
            this.tokenAdminChecking = false;
          } else {
            return;
          }
        });
      }
      // 移除 sessionStorage 中保存的推送数据
      sessionStorage.removeItem('originalTweet');
      sessionStorage.removeItem('originalTweetNews');
      sessionStorage.removeItem('originalTweetBlog');
    }
  },
  watch: {
    tweetBlogInputTags(val) {
      const tags = val.split('#');
      const blogTags = [];
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if (tag.length != 0 &&
            blogTags.indexOf(tag) == -1) {
          blogTags.push(tag);
        }
      }
      this.tweetBlog.tags = blogTags;
    },
  },
};
</script>

<style>

</style>
