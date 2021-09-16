<template>
  <div>
    <div>
      <v-row>
        <MemberCard
          v-for="member in memberList"
          v-bind:key="member.login"
          :member="member"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import MemberCard from "@/components/About/MemberCard";

export default {
  name: "MembersPalace",
  components: {
    MemberCard,
  },
  data: () => ({
    memberList: [],
  }),
  created() {
    this.axios
      .get("https://api.github.com/orgs/uestclug/members")
      .then((res) => {
        res.data.forEach((mem) => {
          this.axios
            .get("https://api.github.com/users/" + mem.login)
            .then((memres) => {
              this.memberList.push(memres.data);
            });
        });
      });
  },
};
</script>
