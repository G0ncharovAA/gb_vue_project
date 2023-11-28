<template>
    <section class="project-section">
        <section class="banner-project">
            <div class="banner-title">
                <div class="articles-news">Our Project</div>
                <div class="home-blog">Home / Project</div>
            </div>
        </section>
        <ProjectsList />
        <div class="pagination">
            <div class="pagination-icon current-page">
                <p class="pagination-number">01</p>
            </div>
            <div class="pagination-icon">
                <p class="pagination-number">02</p>
            </div>
            <div class="pagination-icon">
                <p class="pagination-number">03</p>
            </div>
            <img class="icon" alt="next page" src="../assets/img2/pagination_next.svg" />
        </div>
    </section>
</template>

<script>
import ProjectsList from './ProjectsList.vue';

export default {
    name: 'Project',
    components: {
        ProjectsList,
    }
}
</script>

<style scoped lang="scss">
.banner-project {
    margin-top: 44px;
    width: 100%;
    height: auto;
    background-image: url("../assets/project/hero_back.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: local;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}
</style>
