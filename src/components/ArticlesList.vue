<template>
    <div class="app-container">
        <div class="articles">
            <div v-for="(article, index) in filteredArticles" :key="index">
                <article class="article">
                    <h2 class="article-title">{{ article.title }}</h2>
                    <p class="article-paragraph" v-if="article.paragraphOne">{{ article.paragraphOne }}</p>
                    <img :src="article.imageUrl" alt="Image" class="article-image" />
                    <div v-if="article.date" class="article-panel">
                        <p class="article-date">{{ article.date }}</p>
                        <p class="article-breadcrumbs">Interior / Home / Decor</p>
                    </div>
                    <p class="article-paragraph">{{ article.paragraphTwo }}</p>
                    <div v-if="article.details" class="article-details">
                        <h2 class="article-details-head">“</h2>
                        <p class="article-details-caption">
                            The details are not the details. <br />They make the design.
                        </p>
                    </div>
                </article>
            </div>
        </div>
        <div class="tags-container">
            <h2 class="tags-title">Tags</h2>
            <div class="tags">
                <div v-for="(tag, index) in tags" :key="index">
                    <p :class="{ 'tag': true, 'selected': tag.name === selectedTag }"
                        @click="filterArticlesByTag(tag.name)">
                        {{ tag.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'ArticlesList',
    data() {
        return {
            tags: [
                { name: "Kitchen" },
                { name: "Bedroom" },
                { name: "Building" },
                { name: "Architecture" },
                { name: "Kitchen Planning" },
            ],
            selectedTag: 'Kitchen',
        };
    },
    methods: {
        filterArticlesByTag(tagName) {
            this.selectedTag = tagName;
        },
    },
    computed: {
        filteredArticles() {
            if (this.selectedTag) {
                return this.articles.filter((article) => article.tags.includes(this.selectedTag));
            } else {
                return this.articles;
            }
        },
        ...mapState({
            articles: state => state.articlesList
        }),
        ...mapActions(['fetchArticlesList'])
    },
    created() {
        this.$store.commit('setArticlesList',
            this.fetchArticlesList())
    }
};
</script>

<style lang="scss">
.top-banner {
    margin-top: 53px;
    width: 100%;
    height: auto;
}

.app-container {
    margin-top: 166px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 52px;
}

.araticles {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.article {
    padding-bottom: 35px;
}

.article-image {
    margin-top: 24px;
    width: 100%;
    height: auto;
    border-radius: 50px;
}

.tags-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tags-title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.tag {
    padding: 9px 30px;
    cursor: pointer;
    border-radius: 10px;
    background: #f4f0ec;
    color: #292f36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.selected {
    background: #292f36;
    color: white;
}

.article-title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.article-paragraph {
    margin-top: 20px;
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.article-panel {
    display: flex;
    justify-content: space-between;
    margin-top: 46px;
    padding-bottom: 28px;
}

.article-date {
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.article-breadcromps {
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.article-details {
    margin-top: 35px;
    border-radius: 50px;
    background: #f4f0ec;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 96px;
    padding-bottom: 53px;
}

.article-details-head {
    position: absolute;
    color: #cda274;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 200px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
    /* 250px */
    letter-spacing: 4px;
}

.article-details-caption {
    color: #cda274;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}</style>
