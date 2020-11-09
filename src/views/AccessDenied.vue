<template>
  <div>
    <SimpleNotes title="拒绝访问" icon="fas fa-ban"
        primaryText="只有 Netunion 的成员才能访问此空间" />
  </div>
</template>

<script>
import SimpleNotes from '@/components/Modal/SimpleNotes';

export default {
  name: 'NotFound',
  components: {
    SimpleNotes,
  },
};
</script>
