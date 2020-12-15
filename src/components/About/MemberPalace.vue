<template>
  <div>
    <div v-for="yearList in memberList" v-bind:key="yearList.year">
      <ContentTitle :subtitle="yearList.year" />
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <MemberCard
            v-for="member in yearList.members"
            v-bind:key="member.nickname"
            :member="member"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import memberList from '@/assets/memberList.js';
import ContentTitle from '@/components/Model/ContentTitle';
import MemberCard from '@/components/Model/MemberCard';

export default {
  name: 'MembersPalace',
  components: {
    ContentTitle,
    MemberCard,
  },
  data: () => ({
    memberList: memberList,
  }),
  created() {
    console.log('Read members:');
    console.log(this.memberList);
  },
};
</script>
