<template>
  <div>
    <ChatRoom class="content" />
    <SimpleNotes title="正在开发中" icon="fas fa-truck"
        primaryText="CAT ROOM 将是我们的留言板" secondaryText="仍在努力的开发过程中，下次再来看看吧" />
  </div>
</template>

<script>
import ChatRoom from '@/components/Chat/ChatRoom';
import SimpleNotes from '@/components/Modal/SimpleNotes';

export default {
  name: 'Chat',
  components: {
    ChatRoom,
    SimpleNotes,
  },
};
</script>
