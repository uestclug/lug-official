<template>
  <div>
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";

export default {
  name: "Gitalk",
  mounted() {
    const gitalk = new Gitalk({
      clientID: process.env.VUE_APP_GITALK_CLIENT_ID,
      clientSecret: process.env.VUE_APP_GITALK_CLIENT_SECRET,
      repo: "lug-official",
      owner: "uestclug",
      admin: ["LolipopJ"],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: true, // Facebook-like distraction free mode
      language: "zh-CN",
      perPage: 15,
    });

    gitalk.render("gitalk-container");
  },
};
</script>

<style lang="scss">
@import "../../styles/color.scss";
$gt-color-main: $color-primary;
$gt-color-btn: #ffffff;

.gt-container {
  a {
    color: $gt-color-main;
    &:hover {
      color: lighten($gt-color-main, 20%);
      border-color: lighten($gt-color-main, 20%);
    }
  }

  .gt-svg svg {
    fill: $gt-color-main;
  }

  .gt-spinner::before {
    border-color: $gt-color-btn;
    border-top-color: $gt-color-main;
  }

  .gt-btn {
    background-color: $gt-color-main;
    border-color: $gt-color-main;
    color: $gt-color-btn;
    &-login {
      &:hover {
        background-color: lighten($gt-color-main, 20%);
        border-color: lighten($gt-color-main, 20%);
      }
    }
    &-preview {
      background-color: $gt-color-btn;
      color: $gt-color-main;
      &:hover {
        background-color: darken($gt-color-btn, 5%);
        border-color: lighten($gt-color-main, 20%);
      }
    }
    &-public {
      &:hover {
        background-color: lighten($gt-color-main, 20%);
        border-color: lighten($gt-color-main, 20%);
      }
    }
  }

  .gt-link {
    border-bottom-color: $gt-color-main;
  }

  .gt-user .is--poping .gt-ico svg {
    fill: $gt-color-main;
  }

  .gt-popup .gt-action.is--active:before {
    background: $gt-color-main;
  }

  .gt-header-controls-tip {
    color: $gt-color-main;
  }

  .gt-comment-username {
    color: $gt-color-main;
  }
}
</style>
