<template>
  <div>
    <ContentTitle class="content" title="线上服务" icon="fas fa-concierge-bell" />
    <Projects class="content" />
    <v-row class="content">
      <v-col cols="12" md="6">
        <ContentTitle title="新闻公告" icon="fas fa-bullhorn" />
        <NewsList />
      </v-col>
      <v-col cols="12" md="6">
        <ContentTitle title="博客文章" icon="fas fa-blog" />
        <BlogList />
      </v-col>
    </v-row>
    <v-row class="content">
      <v-col cols="12" md="6">
        <ContentTitle title="加入我们" icon="fas fa-user-plus" />
        <Recruitment />
      </v-col>
      <v-col cols="12" md="6">
        <ContentTitle title="协会成员" icon="fas fa-user-friends" />
        <Members />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogList from '@/components/Home/BlogList';
import ContentTitle from '@/components/App/ContentTitle';
import Members from '@/components/Home/Members';
import NewsList from '@/components/Home/NewsList';
import Projects from '@/components/Home/Projects';
import Recruitment from '@/components/Home/Recruitment';

export default {
  name: 'Home',
  components: {
    BlogList,
    ContentTitle,
    Members,
    NewsList,
    Projects,
    Recruitment,
  },
};
</script>
