<template>
  <main>
    <JumboTron />
    <ConsultantSection />
    <AboutSection />
    <ProjectSection />
    <div class="wrapper_last_section">
      <TestimonialSection />
      
    </div>
  </main>
</template>

<script>
import JumboTron from '@/components/main/jumbotron/JumboTronComponent.vue'
import ConsultantSection from '@/components/main/sec_consultant/ConsultantComponent.vue'
import AboutSection from '@/components/main/sec_about/AboutComponent.vue'
import ProjectSection from '@/components/main/sec_project/ProjectComponent.vue'
import TestimonialSection from '@/components/main/sec_testimonial/CustomersComponent.vue'
export default {
  name: 'MainComponent',
  components: {
    JumboTron,
    ConsultantSection ,
    AboutSection,
    ProjectSection,
    TestimonialSection
  }
}
</script>

<style lang="scss" scoped>

.wrapper_last_section {
  background-image: url('@/assets/img/bg_customer.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;
}
</style>