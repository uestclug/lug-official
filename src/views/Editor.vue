<template>
  <div>
    <SimpleNotes v-if="tokenAdminChecking" title="为您准备编辑器中"
        icon="fas fa-edit" primaryText="Netunion 的成员可以自由编写与修改新闻和博客"
        secondaryText="正在为您准备上好的编辑器，请稍后..." button="hide" />
    <v-form
      v-else
      v-model="editorValid"
      class="content"
    >
    </v-form>
  </div>
</template>

<script>
import SimpleNotes from '@/components/Model/SimpleNotes';

export default {
  name: 'Editor',
  components: {
    SimpleNotes,
  },
  data: () => ({
    tokenAdminChecking: true,
    editorValid: false,
  }),
  props: [
    'type',
    'id',
  ],
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
