<template>
  <div>
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';

export default {
  name: 'Gitalk',
  mounted() {
    const gitalk = new Gitalk({
      clientID: process.env.VUE_APP_GITALK_CLIENT_ID,
      clientSecret: process.env.VUE_APP_GITALK_CLIENT_SECRET,
      repo: 'nu-official',
      owner: 'uestclug',
      admin: ['LolipopJ'],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
      language: 'zh-CN',
      perPage: 20,
    });

    gitalk.render('gitalk-container');
  },
};
</script>
