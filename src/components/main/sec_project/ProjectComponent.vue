<template>
    <section id="project">
        <div class="container">
            <div class="divisor">
                <span class="line_30 me-3"></span> project
            </div>
            <div class="row row-cols-2">
                <div class="col">
                    <h2 class="text-uppercase">
                        our expert trusted consultants help clients
                    </h2>
                </div>
                <div class="col text-white d-flex justify-content-end align-items-center">
                    <div class="double_arrow_icon d-flex">
                        <div class="left_icon d-flex justify-content-center align-items-center">
                            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                        </div>
                        <div class="right_icon d-flex justify-content-center align-items-center">
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3">

                <div class="col" v-for="photo in secPhoto" :key="photo.id">
                    <div class="cards h-100 w-100">
                        <img :src="photo.src" :alt="photo.alt">
                        <div class="img_hover">
                            <div class="product">
                                <div class="desc">
                                    <h5>Purinky Products</h5>
                                    uncategorized
                                </div>
                                <div class="add">
                                    <div class="icon">
                                        <font-awesome-icon icon="fa-solid fa-plus" />
                                    </div>      
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectComponent.vue',
    data() {
        return {
            secPhoto: [
                {
                    id: 1,
                    src: require("@/assets/img/project/DRY-1-790x592.jpg"),
                    alt: 'Foto a caso'
                },
                {
                    id: 2,
                    src: require("@/assets/img/project/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg"),
                    alt: 'Foto a caso'
                },
                {
                    id: 3,
                    src: require("@/assets/img/project/z1el4c4p-790x592.jpg"),
                    alt: 'Foto a caso'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
#project {
    background-color: $blueBrand;
    padding-bottom: 7rem;

    h2 {
        color: white;
    }

    .left_icon,
    .right_icon {
        font-size: 0.7rem;
        width: 35px;
        height: 38px;
        background-color: $arrowBg;
        margin-left: 0.5rem;

        &:hover {
            filter: brightness(1.5);
        }
    }

    .col {
        
        .cards {
            position: relative;
            transition: 1s;

            img {
                max-width: 100%;
            }

            .img_hover {
                display: flex;
                align-items: flex-end;
                padding: 2rem;
                margin-top: auto;
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #aa0016bd;
                top: 0;
                left: 0;
                visibility: hidden;

                .product {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;

                    .desc {
                        color: $menuText;

                        h5 {
                            color: white;
                            font-weight: 600;
                        }
                    }

                    .add {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: $blueBrand;
                        width: 16%;
                        aspect-ratio: 1 / 1;
                        cursor: pointer;
                        
                        .icon {
                            color: white;
                            transition: 0.3s;

                            &:hover {
                                transform: rotate(90deg);
                            }
                        }
                    }

                }
            }

            &:hover .img_hover {
                visibility: visible;
            }

            &:hover {
                z-index: 1;
                transform: scale(1.2);
            }

        }

    }
}
</style>