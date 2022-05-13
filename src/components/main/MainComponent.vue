<template>
  <main>
    <JumboTron />
    <ConsultantSection />
  </main>
</template>

<script>
import JumboTron from '@/components/main/JumboTronComponent.vue'
import ConsultantSection from '@/components/main/ConsultantComponent.vue'
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