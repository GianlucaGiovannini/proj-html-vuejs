<template>
    <section id="our_consultants">
        <TitleConsultant />
        <ContentConsultant />
    </section>
</template>

<script>
import TitleConsultant from '@/components/main/sec_consultant/TitleSectionComponent.vue'
import ContentConsultant from '@/components/main/sec_consultant/ContentSectionComponent.vue'
export default {
    name: 'ConsultantComponent',
    components: {
        TitleConsultant,
        ContentConsultant
    }

}
</script>

<style lang="scss" scoped>
#our_consultants {
    padding: 5.55rem 0 7rem;
}
</style>