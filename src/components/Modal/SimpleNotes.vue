<template>
  <div>
    <div class="content text-center pb-6">
      <ContentTitle :title="title ? title : 'Ops'" :icon="icon ? icon : ''" />
      <div class="pb-6">
        <div class="pb-1">{{ primaryText ? primaryText : '不知道发生了什么，但是请' }}</div>
        <div class="pb-1"
          >{{ secondaryText ? secondaryText : '点击下方的按钮返回计划的航线吧' }}</div
        >
      </div>
      <v-btn
        to="/"
        color="primary"
        depressed
      >{{ buttonText ? buttonText : '校准坐标' }}</v-btn>
    </div>
  </div>
</template>

<script>
import ContentTitle from '@/components/Modal/ContentTitle';

export default {
  name: 'SimpleNotes',
  components: {
    ContentTitle,
  },
  props: [
    'title',
    'icon',
    'primaryText',
    'secondaryText',
    'buttonText',
  ],
};
</script>

<style>

</style>
