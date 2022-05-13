<template>
  <main>
    <JumboTron />
    <ConsultantSection />
  </main>
</template>

<script>
import JumboTron from '@/components/main/jumbotron/JumboTronComponent.vue'
import ConsultantSection from '@/components/main/sec_consultant/ConsultantComponent.vue'
export default {
  name: 'MainComponent',
  components: {
    JumboTron,
    ConsultantSection 
  }
}
</script>

<style lang="scss" scoped>
</style>