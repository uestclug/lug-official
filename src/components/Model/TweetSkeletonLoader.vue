<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 4 : 2"
        class="rounded-lg transition-swing"
      >
        <div class="clickable">
          <div v-if="loadingType == 'news'">
            <v-skeleton-loader
              type="heading, table-cell, paragraph"
              class="pa-4"
            />
          </div>
          <div v-else-if="loadingType == 'blog'">
            <v-skeleton-loader
              type="heading, table-cell, paragraph"
              class="pa-4"
            />
          </div>
          <!--
          <v-fade-transition>
            <v-overlay
              v-if="hover"
              absolute
              color="primary"
              z-index="4"
            >
              <v-btn
                rounded
                :depressed="!isLoading"
                :text="isLoading"
                :loading="isLoading"
                color="primary"
              >点击加载更多</v-btn>
            </v-overlay>
          </v-fade-transition>
          -->
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'TweetSkeletonLoader',
  data: () => ({
    //
  }),
  props: [
    'loadingType', // 加载类型 ('news'/'blog')
    'isLoading', // 加载中
  ],
};
</script>
