<template>
  <header id="site_header">
    <nav :class="scrollHeader >= 60 ? 'scroll_y' : ''">
      <div class="container d-flex justify-content-between align-items-center">
        <LogoHeader />

        <div class="site_menu text-uppercase d-flex flex-row">
          <a href="#" :class="activeItem === item.id ? 'item_active' : ''" v-for="item in menuList" :key="item.id"
            @click="activeItem = item.id">
            {{ item.item }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoHeader from '@/components/LogoHeaderComponent.vue'
export default {
  name: 'HeaderComponent',
  components: {
    LogoHeader,
  },
  data() {
    return {
      scrollHeader: '',
      activeItem: 1,
      menuList: [
        {
          id: 1,
          item: "home",
        },
        {
          id: 2,
          item: "about",
        },
        {
          id: 3,
          item: "projects",
        },
        {
          id: 4,
          item: "services",
        },
        {
          id: 5,
          item: "blog",
        },
        {
          id: 6,
          item: "contact",
        },
      ]

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

.site_menu {
  a {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 500;
    color: $menuText;
    padding: 1.3rem 0;
    margin-left: 1.5rem;
    border-top: 3px solid transparent;

    &:hover {
      color: white;
    }
  }

  .item_active {
    color: white;
    border-top: 3px solid white;
  }
}
</style>