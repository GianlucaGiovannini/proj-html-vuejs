<template>
    <section class="about">
        <div class="container-fluid">
            <div class="row">
                <div class="col-7">
                    <img src="@/assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg"
                        alt="Business People at work">
                </div>
                <div class="col-5">
                    <div class="divisor text-uppercase">
                        <span class="line_30"></span> about us
                    </div>
                    <h2 class="text-uppercase">we make your strategy work</h2>
                    <p>When, while lovely valley teems with vapour around meand eridian sun strikes the upper
                        impenetrable foliage of my trees, and but a thousand unknow plants are noticed when i hear the
                        buzz of the little world among the stalks and grow familiar indescribable forms of the insects
                        and flies, then i feel the presence of the almighty</p>
                </div>
                <div class="col-11">
                    <div class="row">
                        <div class="col">
                            <h3 class="text-uppercase">
                                we help to deliver the business case
                            </h3>
                        </div>
                        <div class="col">
                            <p>
                                When, while lovely valley teems with vapour around meand meridian sun strikes the upper
                                impenetrable foliage of my trees, and but a thousand unknown
                            </p>
                        </div>
                    </div>
                    <button class="btn_site">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutComponent.vue'
}
</script>

<style lang="scss" scoped>
.about {
    background-image: url("@/assets/img/bg_strategy.png");
    background-repeat: no-repeat;
    background-position: top right;
    background-size: cover;
    padding-bottom: 5rem;
}

.container-fluid {
    .row {
        .col-7 {
            padding: 0;

            img {
                height: 540px;
                width: 100%;
                object-fit: cover;
                object-position: top center;
            }
        }

        .col-5 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 3.12rem 6rem 3.12rem 5rem;

            h2 {
                font-size: 3rem;
                color: white;
                padding: 0 4rem 1.5rem 0;
                margin: 0;
            }

            p {
                font-size: 0.85rem;
                color: $textStrategy;
                padding-right: 11rem;
                margin: 0;
            }
        }

        .col-11 {
            background-color: $lightGreen;
            padding: 4.5rem 3rem 4.5rem 0;
            position: relative;

            h3 {
                color: $blueBrand;
                font-size: 1.7rem;
                font-weight: 600;
                margin-left: auto;
                margin-bottom: 0;
                width: 50%;
            }

            p {
                font-size: 0.85rem;
                width: 60%;
                margin-left: 20%;
            }

            .btn_site {
                color: white;
                background-color: red;
                position: absolute;
                bottom: 0;
                right: 0;

                &:hover {
                    background-color: $blueBrand;
                    border-bottom: 1px solid $lightGreen;
                    border-right: 1px solid $lightGreen;
                }
            }
        }
    }
}
</style>