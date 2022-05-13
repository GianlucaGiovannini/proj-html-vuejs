<template>

    <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col">
                <div class="cards d-flex">
                    <div class="card-icon ms-5 ps-3 pe-4">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-chart-column" />
                        </div>
                    </div>
                    <div class="card-text">
                        <h3 class="text-uppercase">
                            Statistical consulting
                        </h3>
                        When, while lovely valley teems with vapour around meand eridian sun strikes the upper
                        impenetrable foliage of my trees, and but a
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="cards d-flex">
                    <div class="card-icon ms-5 ps-3 pe-4">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-signal" />
                        </div>
                    </div>
                    <div class="card-text">
                        <h3 class="text-uppercase">
                            Statistical consulting
                        </h3>
                        When, while lovely valley teems with vapour around meand eridian sun strikes the upper
                        impenetrable foliage of my trees, and but a
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="cards d-flex">
                    <div class="card-icon ms-5 ps-3 pe-4">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-wallet" />
                        </div>
                    </div>
                    <div class="card-text">
                        <h3 class="text-uppercase">
                            Statistical consulting
                        </h3>
                        When, while lovely valley teems with vapour around meand eridian sun strikes the upper
                        impenetrable foliage of my trees, and but a
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="cards d-flex">
                    <div class="card-icon ms-5 ps-3 pe-4">
                        <div class="icon">
                            <font-awesome-icon icon="fa-solid fa-bullseye" />
                        </div>
                    </div>
                    <div class="card-text">
                        <h3 class="text-uppercase">
                            Statistical consulting
                        </h3>
                        When, while lovely valley teems with vapour around meand eridian sun strikes the upper
                        impenetrable foliage of my trees, and but a
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'ContentSectionComponent',
}
</script>

<style lang="scss" scoped>
.container {
    .row {
        .col {
            padding: 0 4rem;
            margin-bottom: 6rem;

            .card-icon {
                .icon {
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

            h3 {
                font-size: 1rem;
                font-weight: 700;
                padding-top: 0.5rem;
                margin-bottom: 1rem;
            }
        }
    }
}
</style>