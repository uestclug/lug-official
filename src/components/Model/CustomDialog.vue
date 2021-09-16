<template>
  <v-dialog v-model="dialog" max-width="600" @click:outside="closeDialog">
    <v-card class="rounded-lg pa-4">
      <v-card-title>
        <slot name="title"></slot>
      </v-card-title>
      <v-card-subtitle>
        <slot name="subtitle"></slot>
      </v-card-subtitle>
      <v-card-text>
        <slot name="content"></slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn depressed @click="closeDialog">关闭</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CustomDialog",
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false,
    },
    closeDialog: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
};
</script>
