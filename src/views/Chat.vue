<template>
  <div>
    <SimpleNotes title="正在开发中" icon="fas fa-truck"
        primaryText="CAT ROOM 将是我们的留言板" secondaryText="仍在努力的开发过程中，下次再来看看吧" />
  </div>
</template>

<script>
import SimpleNotes from '@/components/Model/SimpleNotes';

export default {
  name: 'Chat',
  components: {
    SimpleNotes,
  },
  data: () => ({
    //
  }),
  created() {
    //
  },
};
</script>
