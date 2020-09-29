<template>
  <v-main>
    <v-app>
      <AppBar />
      <router-view />
      <Footer />
    </v-app>
    <FloatButton />
  </v-main>
</template>

<script>
import AppBar from '@/components/App/AppBar'
import FloatButton from '@/components/App/FloatButton'
import Footer from '@/components/App/Footer'

export default {
  name: 'App',
  components: {
    AppBar,
    FloatButton,
    Footer
  },
  data: () => ({
    //
  })
}
</script>
