<template>
    <section id="testimonial">
        <div class="container text-end">
            <div class="divisor">
                Testimonial
                <span class="line_30 ms-3"></span>
            </div>
            <div class="title_section d-flex justify-content-end">
                <h2 class="text-uppercase text-end">
                    what's the customer say about our work
                </h2>
            </div>
        </div>
        <CustomerSay />
        
    </section>
</template>

<script>
import CustomerSay from '@/components/main/sec_testimonial/CustomerSayComponent.vue'
export default {
    name: 'TestimonialComponent',
    components: {
        CustomerSay
    }
}
</script>

<style lang="scss" scoped>
#testimonial {
    padding-bottom: 8rem;
    h2 {
        font-size: 2rem;
        color: white;
        text-align: left;
        margin: 0;
        padding-bottom: 2.2rem;
        width: 40%;
    }
}
</style>