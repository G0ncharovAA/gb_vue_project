<template>
    <div class="articles-carousel">
        <div class="article-card" v-for="article in articles" :key="article.image"
            :style="'background-color: ' + article.backgroundColor">
            <div class="article-img" :style="'background-image: url(' + article.image + ')'">
                <p class="article-label">{{ article.label }}</p>
            </div>
            <h5 class="article-caption">{{ article.caption }}</h5>
            <div class="article-panel">
                <p class="article-date">{{ article.date }}</p>
                <svg class="article-button" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
                    fill="none">
                    <circle cx="26" cy="26.267" r="26" :fill="article.buttonFill" />
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ArticlesCarousel',
    data() {
        return {
            articles: [
                {
                    image: "img/article0.png",
                    label: "Kitchan Design",
                    caption: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022",
                    buttonFill: "#F4F0EC",
                },
                {
                    image: "img/article1.png",
                    label: "Living Design",
                    caption: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022",
                    backgroundColor: "#F4F0EC",
                    buttonFill: "white",
                },
                {
                    image: "img/article2.png",
                    label: "Interior Design",
                    caption: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022",
                    buttonFill: "#F4F0EC",
                },
            ],
        };
    },
};
</script>