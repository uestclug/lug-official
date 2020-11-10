<template>
  <div>
    <SimpleNotes v-if="!tokenAdminChecking" title="正在开发中" icon="fas fa-truck"
        primaryText="Editor 将帮助 Netunion 成员编写与修改新闻和博客"
        secondaryText="仍在努力的开发过程中，下次再来看看吧" />
  </div>
</template>

<script>
import SimpleNotes from '@/components/Modal/SimpleNotes';

export default {
  name: 'Editor',
  components: {
    SimpleNotes,
  },
  data: () => ({
    tokenAdminChecking: true,
  }),
  created() {
    if (this.$DevMode) {
      this.tokenAdminChecking = false;
    } else {
      this.axios.post('/users/checkTokenAdmin').then((Response) => {
        if (Response.data.code == 200) {
          this.tokenAdminChecking = false;
        }
      });
    }
  },
};
</script>

<style>

</style>
