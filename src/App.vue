<template>
  <div id="app">

    <SiteHeader />

    <SiteMain />

    <SiteFooter />

    <ChatComponent />

  </div>
</template>

<script>
import SiteHeader from '@/components/HeaderComponent.vue'
import SiteMain from '@/components/MainComponent.vue'
import SiteFooter from '@/components/FooterComponent.vue'
import ChatComponent from '@/components/ChatComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    ChatComponent
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
