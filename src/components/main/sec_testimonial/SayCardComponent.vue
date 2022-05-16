<template>
    <div class="col" @mouseenter="cardHover = true" @mouseleave="cardHover = false">
        <div class="cards" :style="cardHover === true ? `background-image:url(${about.bgHover})` : ''">
            <div class="cards_text">
                <p>{{ about.text }}</p>
                <div class="author_info">
                    <h5>
                        {{ about.author }}
                    </h5>
                    <small>
                        {{ about.agency }}
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SayCardComponent',
    props: {
        about: Object
    },
    data() {
        return {
            cardHover: false
        }
    }
}
</script>

<style lang="scss" scoped>
.col {
    color: $textCostumerCard;
    height: 300px;
    z-index: 1;

    .cards {
        font-size: 0.85rem;
        height: 100%;
        width: 100%;
        padding-top: 2.5rem;
        padding-right: 2.8rem;
        padding-bottom: 2.8rem;
        padding-left: 2.4rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        h5 {
            font-size: 1rem;
            color: black;
            font-weight: 600;
            padding-top: 1.2rem;
        }


        .cards_text {
            width: 100%;
            height: 100%;
            z-index: 2;
        }


        &:hover h5 {
            color: white;
        }
    }

}
</style>