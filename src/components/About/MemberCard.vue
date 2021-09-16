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
            <v-avatar color="primary" size="72">
              <span
                class="white--text headline text-h3"
                v-if="!member.avatar_url"
                >{{ member.name[0] }}</span
              >
              <v-img v-else :src="member.avatar_url" />
            </v-avatar>
          </v-card-text>
          <v-card-title class="justify-center pt-0">{{
            member.name
          }}</v-card-title>
          <v-card-subtitle class="text-center">
            <div>「{{ member.bio }}」</div>
            <div>
              <v-chip
                v-if="'blog' in member"
                @click="$Utils.openExternalLink(member.blog)"
                class="ma-1 mt-3"
                label
                small
                color="primary"
              >
                <v-icon small color="white"> fas fa-blog </v-icon>
              </v-chip>
              <v-chip
                @click="$Utils.openExternalLink(member.html_url)"
                class="ma-1 mt-3"
                label
                small
                color="primary"
              >
                <v-icon small color="white"> fab fa-github </v-icon>
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
  name: "MemberCard",
  props: ["member"],
};
</script>
