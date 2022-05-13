<template>
    <div class="container-fluid h-100">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-8"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BgJumboComponent',

}
</script>

<style lang="scss" scoped>
    .col-4 {
        background-image: url("@/assets/img/bg_jumbo.png");
        background-repeat: no-repeat;
        background-position: top right;
        background-size: cover;
        height: 70vh;
    }
    .col-8 {
        background-image: url("@/assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        height: 70vh;
    }
</style>