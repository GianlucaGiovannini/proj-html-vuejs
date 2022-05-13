<template>
    <div class="site_menu text-uppercase d-flex flex-row">
            <a href="#" 
                :class="activeItem === item.id ? 'item_active' : '' " 
                v-for="item in menuList" 
                :key="item.id" 
                @click="activeItem = item.id">
                    {{ item.item }}
            </a>
    </div>
</template>

<script>

export default {
    name: 'MenuHeaderComponent',

    data() {
        return {
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
}
</script>

<style lang="scss" scoped>
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