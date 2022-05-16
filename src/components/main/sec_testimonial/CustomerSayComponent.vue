<template>
    <div class="gradient_trick">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col bg-white">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-3 gy-3">
                            <SayCard :about="about" v-for="about in sayAbout" :key="about.id" />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SayCard from '@/components/main/sec_testimonial/SayCardComponent.vue'
export default {
    name: 'CustomerSayComponent',
    components: {
        SayCard,
    },
    data() {
        return {
            sayAbout: [
                {
                    id: 1,
                    text: 'when, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when i hear the buzz of the little.',
                    author: 'Vera Duncan',
                    agency: 'Amazon Inc.',
                    bgHover: require("@/assets/img/hover/oliver-ragfelt-488196-2.jpg")
                },
                {
                    id: 2,
                    text: 'when, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when i hear the buzz of the little.',
                    author: 'Vera Duncan',
                    agency: 'Amazon Inc.',
                    bgHover: require("@/assets/img/hover/oliver-ragfelt-488196-unsplash.jpg")
                },
                {
                    id: 3,
                    text: 'when, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed by when i hear the buzz of the little.',
                    author: 'Vera Duncan',
                    agency: 'Amazon Inc.',
                    bgHover: require("@/assets/img/hover/12679.jpg")
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.gradient_trick {
    background: linear-gradient(to right, #1f1e38 16%, white 16%);
}

.row {
    position: relative;
    overflow: hidden;


    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -10%;
        width: 0;
        height: 100%;
        background-color: $blueBrand;
        transform: skewX(35deg);
        transition: width 1s;
        z-index: 0;
    }

    &:hover::before {
        width: 120%;
    }

}
</style>