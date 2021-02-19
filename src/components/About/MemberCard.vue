<template>
  <v-col cols="12" sm="6" md="4">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 4 : 1"
          class="rounded-lg transition-swing"
          outlined
        >
          <v-card-text class="text-center">
            <v-avatar
              :color="member.color ? member.color : 'primary'"
              size="72"
            >
              <span class="white--text headline text-h3">{{
                member.nickname[0]
              }}</span>
            </v-avatar>
          </v-card-text>
          <v-card-title class="justify-center pt-0">{{
            member.nickname
          }}</v-card-title>
          <v-card-subtitle class="text-center">
            <div>「{{ member.intro }}」</div>
            <div>
              <v-chip
                v-if="member.blog"
                @click="$Utils.openExternalLink(member.blog)"
                class="ma-1 mt-3"
                label
                small
                :color="member.color ? member.color : 'primary'"
              >
                <v-icon small color="white">
                  fas fa-blog
                </v-icon>
              </v-chip>
              <v-chip
                v-if="member.github"
                @click="$Utils.openExternalLink(member.github)"
                class="ma-1 mt-3"
                label
                small
                :color="member.color ? member.color : 'primary'"
              >
                <v-icon small color="white">
                  fab fa-github
                </v-icon>
              </v-chip>
              <v-chip
                v-if="member.gitlab"
                @click="$Utils.openExternalLink(member.gitlab)"
                class="ma-1 mt-3"
                label
                small
                :color="member.color ? member.color : 'primary'"
              >
                <v-icon small color="white">
                  fab fa-gitlab
                </v-icon>
              </v-chip>
              <v-chip
                v-if="member.gitee"
                @click="$Utils.openExternalLink(member.gitee)"
                class="ma-1 mt-3"
                label
                small
                :color="member.color ? member.color : 'primary'"
              >
                <v-icon small color="white">
                  fab fa-git
                </v-icon>
              </v-chip>
            </div>
          </v-card-subtitle>
        </v-card>
      </template>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: 'MemberCard',
  props: ['member'],
};
</script>
