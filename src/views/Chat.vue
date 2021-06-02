<template>
  <div>
    <v-row class="content">
      <v-col cols="12">
        <Gitalk />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Gitalk from '@/components/Chat/Gitalk';

export default {
  name: 'Chat',
  components: {
    Gitalk,
  },
};
</script>
