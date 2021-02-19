<template>
  <div>
    <div v-for="yearList in memberList" v-bind:key="yearList.year">
      <ContentTitle :subtitle="yearList.year + ' 年'" />
      <v-row>
        <MemberCard
          v-for="member in yearList.members"
          v-bind:key="member.nickname"
          :member="member"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import memberList from '@/assets/memberList.js';
import ContentTitle from '@/components/Model/ContentTitle';
import MemberCard from '@/components/About/MemberCard';

export default {
  name: 'MembersPalace',
  components: {
    ContentTitle,
    MemberCard,
  },
  data: () => ({
    memberList: [],
  }),
  created() {
    console.log('Read members:');
    console.log(memberList);

    // 按照加入年份由近及远和昵称字典序对数组进行排序
    const memberListObj = Object.assign([], memberList);
    const sortedMemberListObj = [];
    const memberListObjKeysByYear = Object.keys(memberListObj)
        .sort(function(a, b) {
          return memberListObj[b].year - memberListObj[a].year;
        });
    for (let i = 0; i < memberListObjKeysByYear.length; i++) {
      const obj = {
        year: memberListObj[memberListObjKeysByYear[i]].year,
        members: [],
      };
      const memberListObjKeysByNickname = Object
          .keys(memberListObj[memberListObjKeysByYear[i]].members)
          .sort(function(a, b) {
            const aNickname = memberListObj[memberListObjKeysByYear[i]]
                .members[a].nickname.toUpperCase();
            const bNickname = memberListObj[memberListObjKeysByYear[i]]
                .members[b].nickname.toUpperCase();
            if (aNickname > bNickname) {
              return 1;
            } else if (aNickname < bNickname) {
              return -1;
            } else {
              return 0;
            }
          });
      for (let n = 0; n < memberListObjKeysByNickname.length; n++) {
        obj.members.push(memberListObj[memberListObjKeysByYear[i]]
            .members[memberListObjKeysByNickname[n]]);
      }
      sortedMemberListObj.push(obj);
    }

    this.memberList = sortedMemberListObj;
  },
};
</script>
