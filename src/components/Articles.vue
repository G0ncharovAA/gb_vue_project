<template>
  <section class="section-articles center">
    <h1 class="articles-title">Articles & News</h1>
    <p class="articles-caption">
      It is a long established fact that a reader will be distracted by the of
      readable content<br />of a page when lookings at its layouts the points of
      using.
    </p>
    <ArticlesCarousel />
    <ArticlesList />
  </section>
</template>

<script>
  import ArticlesCarousel from "./ArticlesCarousel.vue";
  import ArticlesList from "./ArticlesList.vue";

  export default {
    name: "Articles",
    components: {
      ArticlesCarousel,
      ArticlesList,
    },
  };
</script>
