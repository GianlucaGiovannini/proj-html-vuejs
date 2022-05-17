<template>

    <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col" v-for="element in consultatSec" :key="element.id">
                <div class="cards d-flex">
                    <div class="card-icon ms-5 ps-3 pe-4">
                        <div class="icon">
                            <font-awesome-icon :icon="element.icon" />
                        </div>
                    </div>
                    <div class="card-text">
                        <h3 class="text-uppercase">
                            {{ element.title }}
                        </h3>
                        <p>
                            {{ element.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentSectionComponent',
    data() {
        return {
            consultatSec: [
                {
                    id: 1,
                    title: "Statistical consulting",
                    text: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
                    icon: "fa-solid fa-chart-column"
                },
                {
                    id: 2,
                    title: "Digital consulting",
                    text: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
                    icon: "fa-solid fa-signal"
                },
                {
                    id: 3,
                    title: "Banking consulting",
                    text: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
                    icon: "fa-solid fa-wallet"
                },
                {
                    id: 4,
                    title: "Enterprise Consulting",
                    text: "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a",
                    icon: "fa-solid fa-bullseye"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    .row {
        --bs-gutter-y: 4.5rem;

        .col {
            padding: 0 4rem;

            .card-icon {
                .icon {
                    font-size: 1.3rem;
                    width: 50px;
                    height: 50px;
                    background-color: $iconBg;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                }
            }

            .card-text {

                h3 {
                    font-size: 1rem;
                    font-weight: 700;
                    padding-top: 0.5rem;
                    margin-bottom: 1rem;
                }

                p {
                    color: $globalText;
                    padding-right: 4rem;
                }

            }
        }
    }
}
</style>