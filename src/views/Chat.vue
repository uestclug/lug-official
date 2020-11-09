<template>
  <div>
    <ChatRoom class="content" />
    <div>
      <div class="content text-center pb-6">
        <ContentTitle title="正在开发中" icon="fas fa-truck" />
        <p>CAT ROOM 将是我们的留言板<br />仍在努力的开发过程中，下次再来看看吧</p>
        <v-btn
          to="/"
          color="primary"
          depressed
        >回到首页</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import ChatRoom from '@/components/Chat/ChatRoom';
import ContentTitle from '@/components/Modal/ContentTitle';

export default {
  name: 'Chat',
  components: {
    ChatRoom,
    ContentTitle,
  },
};
</script>
