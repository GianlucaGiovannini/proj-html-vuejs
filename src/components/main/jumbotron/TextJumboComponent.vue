<template>
    <div class="text_jumbo text-uppercase">
        <div class="container">
            <div class="slogan_container">
                <div class="divisor">
                    <span class="line_30 me-3"></span>
                    Alwats the best way you need it
                </div>
                <h1 class="pb-4">the best business consulting</h1>
                <div class="more_info d-flex align-items-center">
                    <button class="btn_site">read more</button>
                    <span class="icon_player">
                        <font-awesome-icon icon="fa-solid fa-play" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextJumboComponent'
}
</script>

<style lang="scss" scoped>
.text_jumbo {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;

    .container {
        height: 100%;
        position: relative;

        .slogan_container {
            position: absolute;
            bottom: 20%;
            width: 50%;

            h1 {
                font-size: 4.2rem;

            }

            .btn_site {
                margin-right: 1.5rem;
                background-color: $lightGreen;
                border: none;

                &:hover {
                    background-color: $btnHover;
                }
            }

            .icon_player {
                font-size: 0.6rem;
                color: $lightGreen;
                width: 34px;
                height: 34px;
                border: 1px solid white;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 1.5s;

                &:hover {
                    color: $btnHover;
                    transform: scale(1.2);
                }
            }
        }
    }
}



</style>