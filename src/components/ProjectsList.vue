<template>
    <section class="projects-container center">
        <div class="tabs">
            <div v-for="(tab, index) in tabs" :key="index">
                <p :class="{ 'tab': true, 'selected': tab.name === selectedTab }" @click="filterProjecysByTab(tab.name)">
                    {{ tab.name }}
                </p>
            </div>
        </div>
        <section class="projects">
            <article v-for="(project, index) in filteredProjects" :key="index" class="project">
                <div class="project-image-container">
                    <img :src="project.imageUrl" alt="Image" class="project-image" />
                    <svg v-if="project.favored" xmlns="http://www.w3.org/2000/svg" width="36" height="35"
                        viewBox="0 0 36 35" fill="none" class="project-favored">
                        <g filter="url(#filter0_d_993_156)">
                            <path
                                d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                                fill="#FFA928" />
                        </g>
                        <defs>
                            <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div class="card-panel">
                    <div class="card-text">
                        <h6 class="card-title">{{ project.title }}</h6>
                        <p class="card-label">Decor / Artchitecture</p>
                    </div>
                    <svg class="card-button" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                        fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </article>
        </section>
    </section>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'ProjetcsList',
    data() {
        return {
            tabs: [
                { name: "Bathroom" },
                { name: "Bed Room" },
                { name: "Kitchan" },
                { name: "Living Area" },
            ],
            selectedTab: 'Bed Room',
        };
    },
    methods: {
        filterProjecysByTab(tabName) {
            this.selectedTab = tabName;
        },
    },
    computed: {
        filteredProjects() {
            if (this.selectedTab) {
                return this.projects.filter((project) => project.tabs.includes(this.selectedTab));
            } else {
                return this.projects;
            }
        },
        ...mapState({
            projects: state => state.projectsList
        }),
        ...mapActions(['fetchProjectsList'])
    },
    created() {
        this.$store.commit('setProjectsList',
            this.fetchProjectsList())
    }
};
</script>

<style scoped lang="scss">
.projects-container {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
}

.tabs {
    display: flex;
    border-radius: 18px;
    border: 1px solid #cda274;
}

.tab {
    cursor: pointer;
    padding: 26px 66px;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.selected {
    color: white;
    border-radius: 18px;
    background: #CDA274;
}

.projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 2865px;
    gap: 16px;
}

.project {
    width: 50%;
    display: flex;
    flex-direction: column;
}

.project-image-container {
    position: relative;
    width: 100%;
}

.project-image {
    width: 100%;
}

.project-favored {
    position: absolute;
    top: 6px;
    right: 0;
    align-self: flex-end;
    justify-self: flex-start;
    fill: #FFA928;
    width: 36px;
    height: 34px;
    flex-shrink: 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
