<template>
  <div>
    <SimpleNotes
      title="导航失败"
      icon="fas fa-map-marked-alt"
      primaryText="您来到了未知的荒漠"
    />
  </div>
</template>

<script>
import SimpleNotes from "@/components/Model/SimpleNotes";

export default {
  name: "NotFound",
  components: {
    SimpleNotes,
  },
};
</script>
