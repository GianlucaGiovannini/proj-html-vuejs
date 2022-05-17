<template>
    <section id="blog">
        <div class="container">
            <div class="divisor">
                Blog
                <span class="line_30 ms-3"></span>
            </div>
            <div class="title_section d-flex justify-content-between">
                <h2 class="text-uppercase text-white">
                    The recent news you must read it
                </h2>
                <div class="more_info align-self-start d-flex justify-content-end align-items-center">
                    <button class="btn_site">view all</button>
                </div>
            </div>

            <BlogGrid />
        </div>
    </section>
</template>

<script>
import BlogGrid from '@/components/main/sec_blog/BlogGridComponent.vue'
export default {
    name: 'BlogComponent',
    components: {
        BlogGrid
    }
}
</script>

<style lang="scss" scoped>
#blog {

    .title_section {
        padding-bottom: 2.5rem;

        .btn_site {
            background-color: $lightGreen;
            border: none;

            &:hover {
                background-color: $btnHover;
            }
        }
    }
}
</style>