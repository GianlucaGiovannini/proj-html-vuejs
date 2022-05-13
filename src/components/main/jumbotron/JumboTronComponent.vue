<template>
  <div class="jumbo_tron">
      <BgJumbo />
      <TextJumbo />
  </div>
</template>

<script>
import BgJumbo from '@/components/main/jumbotron/BgJumboComponent.vue'
import TextJumbo from '@/components/main/jumbotron/TextJumboComponent.vue'
export default {
    name: 'JumboTronComponent',
    components: {
        BgJumbo,
        TextJumbo
    }
}
</script>

<style lang="scss" scoped>
    .jumbo_tron {
        position: relative;
    }
</style>