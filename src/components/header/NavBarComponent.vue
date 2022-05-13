<template>
  <nav :class="scrollHeader >= 60 ? 'scroll_y' : '' ">
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
    },
    data() {
    return {
      scrollHeader: '',
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollHeader = window.scrollY
    });
  }
}
</script>

<style lang="scss" scoped>
    nav {
        position: fixed;
        width: 100%;
        z-index: 3;
        transition: background-color 0.7s;
    }

    .scroll_y {
  background-color: rgb(20 20 20 / 95%);
}
</style>