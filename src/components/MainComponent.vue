<template>
  <main>
    <JumboTron />
    <ConsultantSection />
    <AboutSection />
    <ProjectSection />
    <div class="wrapper_last_section">
      <TestimonialSection />
      <BlogSection />
    </div>
    <TalkAbout />
  </main>
</template>

<script>
import JumboTron from '@/components/main/jumbotron/JumboTronComponent.vue'
import ConsultantSection from '@/components/main/sec_consultant/ConsultantComponent.vue'
import AboutSection from '@/components/main/sec_about/AboutComponent.vue'
import ProjectSection from '@/components/main/sec_project/ProjectComponent.vue'
import TestimonialSection from '@/components/main/sec_testimonial/TestimonialComponent.vue'
import BlogSection from '@/components/main/sec_blog/BlogComponent.vue'
import TalkAbout from '@/components/main/sec_talk/TalkAboutComponent.vue'
export default {
  name: 'MainComponent',
  components: {
    JumboTron,
    ConsultantSection ,
    AboutSection,
    ProjectSection,
    TestimonialSection,
    BlogSection,
    TalkAbout
  }
}
</script>

<style lang="scss" scoped>

.wrapper_last_section {
  background-image: url('@/assets/img/bg_wrapper.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;
  padding-bottom: 12rem;
}
</style>