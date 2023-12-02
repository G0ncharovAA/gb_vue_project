<template>
    <section>
        <section class="banner">
            <div class="banner-title">
                <div class="articles-news">Articles & News</div>
                <div class="home-blog">Home / Blog</div>
            </div>
        </section>
        <section class="latest-post center">
            <h1 class="latest-post-label">Latest Post</h1>
            <div class="latest-post-container">
                <img class="latest-post-img" alt="latest post" src="../assets/img2/latest_post.png" />
                <div class="latest-post-content">
                    <h6 class="latest-post-title">
                        Low Cost Latest Invented Interior Designing Ideas
                    </h6>
                    <p class="latest-post-text">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                        dignissim maximus.posuere in.Contrary to popular belief.
                    </p>
                    <p class="latest-post-text">
                        Lorem Ipsum is not simply random text. It has roots in a piece of
                        classica.
                    </p>
                    <div class="latest-post-panel">
                        <div class="latest-post-date">26 December, 2022</div>
                        <img class="latest-post-button" alt="button" src="../assets/img2/button.svg" />
                    </div>
                </div>
            </div>
        </section>
        <Articles />
    </section>
</template>

<script>
import Articles from './Articles.vue'

export default {
    name: 'Blog',
    components: {
        Articles,
    }
}
</script>
