<template>
  <div>
    <div class="content text-center pb-6">
      <ContentTitle title="导航失败"/>
      <p>您来到了未知的荒漠<br />点击下方的按钮返回计划的航线吧</p>
      <v-btn
        to="/"
        color="primary"
        depressed
      >校准坐标</v-btn>
    </div>
  </div>
</template>

<script>
import ContentTitle from '@/components/Modal/ContentTitle';

export default {
  name: 'NotFound',
  components: {
    ContentTitle,
  },
};
</script>
