<template>
  <main>
    <JumboTron />
    <ConsultantSection />
    <StrategySection />
  </main>
</template>

<script>
import JumboTron from '@/components/main/jumbotron/JumboTronComponent.vue'
import ConsultantSection from '@/components/main/sec_consultant/ConsultantComponent.vue'
import StrategySection from '@/components/main/sec_strategy/StrategyComponent.vue'
export default {
  name: 'MainComponent',
  components: {
    JumboTron,
    ConsultantSection ,
    StrategySection
  }
}
</script>

<style lang="scss" scoped>
</style>