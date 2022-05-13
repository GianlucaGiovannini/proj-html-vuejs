<template>
  <nav>
      <div class="container d-flex justify-content-between align-items-center">
          <LogoHeader />
          <MenuHeader />
      </div>
  </nav>
</template>

<script>
import LogoHeader from '@/components/header/LogoHeaderComponent.vue'
import MenuHeader from '@/components/header/MenuHeaderComponent.vue'
export default {
    name: 'HeaderComponent',
    components: {
        LogoHeader,
        MenuHeader,
    }
}
</script>

<style lang="scss" scoped>
    nav {
        position: fixed;
        width: 100%;
        z-index: 3;
    }
</style>