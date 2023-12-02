<template>
    <section>
        <Hero />
        <Projects />
        <Promo />
        <ArticlesCarousel />
    </section>
</template>

<script>
import Hero from './Hero.vue'
import Projects from './Projects.vue'
import Promo from './Promo.vue'
import ArticlesCarousel from './ArticlesCarousel.vue'

export default {
    name: 'Home',
    components: {
        Hero,
        Projects,
        Promo,
        ArticlesCarousel,
    }
}
</script>