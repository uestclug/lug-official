<template>
  <div>
    <ChatRoom v-if="!tokenChecking" class="content" />
    <SimpleNotes v-if="!tokenChecking" title="正在开发中" icon="fas fa-truck"
        primaryText="CAT ROOM 将是我们的留言板" secondaryText="仍在努力的开发过程中，下次再来看看吧" />
  </div>
</template>

<script>
import ChatRoom from '@/components/Chat/ChatRoom';
import SimpleNotes from '@/components/Model/SimpleNotes';

export default {
  name: 'Chat',
  components: {
    ChatRoom,
    SimpleNotes,
  },
  data: () => ({
    tokenChecking: true,
  }),
  created() {
    if (this.$DevMode) {
      this.tokenChecking = false;
      return;
    }

    this.axios.post('/users/checkToken').then((Response) => {
      if (Response.data.code == 200) {
        this.tokenChecking = false;
      }
    });
  },
};
</script>
