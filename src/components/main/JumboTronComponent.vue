<template>
  <div class="jumbo_tron">
      <BgJumbo />
      <TextJumbo />
  </div>
</template>

<script>
import BgJumbo from '@/components/main/BgJumboComponent.vue'
import TextJumbo from '@/components/main/TextJumboComponent.vue'
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