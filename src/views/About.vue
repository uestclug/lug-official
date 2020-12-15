<template>
  <div>
    <ContentTitle
      class="content"
      title="成员殿堂"
      icon="fas fa-place-of-worship"
    />
    <MemberPalace class="content" />
  </div>
</template>

<script>
import ContentTitle from '@/components/Model/ContentTitle';
import MemberPalace from '@/components/About/MemberPalace';

export default {
  name: 'About',
  components: {
    ContentTitle,
    MemberPalace,
  },
};
</script>
