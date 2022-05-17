<template>
    <div class="container-fluid title_section d-flex align-items-end">
        <div class="row w-100">
            <div class="col-5 text-end align-self-end">
                <h2 class="text-uppercase">our consultants can help you </h2>
            </div>
            <div class="col-7 align-self-center">
                <div class="line_max flex-grow"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleSectionComponent'
}
</script>

<style lang="scss" scoped>
.container-fluid {
    margin-right: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 5.55rem;

    h2 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-right: 2.5rem;
        padding-bottom: 0;
        margin-bottom: 0;

    }

    .row {
        --bs-gutter-x: 0;
    }

    .line_max {
        display: inline-block;
        height: 2px;
        width: 100%;
        background-color: $lightGreen;
    }
}
</style>