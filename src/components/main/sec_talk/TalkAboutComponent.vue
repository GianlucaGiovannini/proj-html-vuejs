<template>
    <section class="talk">
        <h2 class="text-uppercase">Let's talk about work</h2>
        <p class="desc pt-2 pb-4">
            A wonderful senerity has taken possession Far far away, behind the word mountains.
        </p>
        <div class="btn_start">
            <button class="btn_site">
                get started
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TalkAboutComponent',

}
</script>

<style lang="scss" scoped>
.talk {
    background-image: url('@/assets/img/business-people-working-together-on-project-and-B3MZ4TX.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    height: 450px;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 2rem;
        color: white;
        text-align: left;
        margin: 0;
    }

    .desc {
        color: #bababa;
        width: 20%;
        text-align: center;
    }

    .btn_site {
        background-color: $blueBrand;
        color: white;
        

        &:hover {
            background-color: $lightGreen;
            color: black;
        }
    }

}
</style>