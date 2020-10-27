<template>
  <div>
    <ContentTitle class="content" />
    <Projects class="content" />
    <v-row class="content">
      <v-col cols="12" md="6">
        <ContentTitle />
        <NewsList />
      </v-col>
      <v-col cols="12" md="6">
        <ContentTitle />
        <BlogList />
      </v-col>
    </v-row>
    <Recruitment class="content-card" />
    <ContentTitle class="content" />
    <Members />
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
