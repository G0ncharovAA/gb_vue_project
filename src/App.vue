<template>
  <div id="app">
    <Header />
    <Hero />
    <Projects />
    <Promo />
    <Articles />
    <Project />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Promo from './components/Promo.vue'
import Articles from './components/Articles.vue'
import Footer from './components/Footer.vue'
import Project from './components/Project.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Projects,
    Promo,
    Articles,
    Footer,
    Project,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

.center {
  margin-left: calc(50% - 500px);
  margin-right: calc(50% - 500px);
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 53px;
  flex-direction: row;
  justify-content: space-between;
}

.container-logo {
  display: flex;
  gap: 10px;
  align-items: center;
}

.img-logo {
  width: 34px;
  height: 34px;
}

.logo-title {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 24px;
}

.menu-item {
  color: #292f36;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  align-items: flex-start;
  background-image: url("assets/img/bg_hero.png");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: cover;
  border-radius: 80px;
  padding: 24px;
  aspect-ratio: 20/13;
}

.hero-title {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.hero-caption {
  margin-top: 18px;
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.hero-button {
  margin-top: 21px;
  display: flex;
  gap: 10px;
  padding: 26px 49px 26px 48px;
  color: white;
  border-radius: 18px;
  background-color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
}

.section-projects {
  margin-top: 80px;
}

.projects-title {
  color: #292f36;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
}

.projects-caption {
  margin-top: 8px;
  color: #4d5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.container-projects {
  margin-top: 93px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 56px 104px;
}

.container-projects :nth-child(4n) .card-img {
  border-radius: 0px 0px 0px 80px;
}

.container-projects :nth-child(4n+1) .card-img {
  border-radius: 0px 80px 0px 0px;
}

.container-projects :nth-child(4n+2) .card-img {
  border-radius: 80px 0px 0px 0px;
}

.container-projects :nth-child(4n+3) .card-img {
  border-radius: 0px 0px 80px 0px;
}

.project-card {
  display: flex;
  flex-direction: column;
}

.card-img {
  width: 100%;
  height: auto;
  background: #c4c4c4;
}

.card-panel {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-text {
  display: flex;
  flex-direction: column;
}

.card-title {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
}

.card-label {
  margin-top: 4px;
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.section-promo {
  margin-top: 96px;
  background-color: #f4f0ec;
  display: flex;
  padding-top: 163px;
  padding-bottom: 164px;
  flex-direction: column;
  align-items: center;
}

.promo-horizontal {
  display: flex;
  justify-content: center;
}

.promo-horizontal> :not(:last-child) {
  margin-right: 38px;
  border-right: 1px solid #cda274;
  padding-right: 38px;
}

.promo-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.promo-number {
  color: #cda274;
  font-family: DM Serif Display;
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1.7px;
}

.promo-label {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.section-articles {
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.articles-title {
  color: #292f36;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
}

.articles-caption {
  margin-top: 12px;
  color: #4d5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.articles-carousel {
  margin-top: 52px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 27px;
}

.article-card {
  border: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;
  padding: 21px;
  border-radius: 62px;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.article-img {
  border-radius: 45px 45px 0px 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: local;
  aspect-ratio: 34/29;
  display: flex;
  padding-left: 20px;
  padding-bottom: 21px;
  align-items: end;
}

.article-label {
  color: #4d5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background-color: white;
  padding: 8px 12px;
  border-radius: 8px 8px 8px 0px;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

.article-caption {
  color: #292f36;
  margin-top: 20px;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
}

.article-panel {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-date {
  color: #4d5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

.footer {
  margin-top: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 96px;
  grid-gap: 104px;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-gap {
  padding-left: 60px;
  gap: 25px;
}

.names-caption {
  margin-top: 18px;
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.names-media {
  margin-top: 31px;
  width: 225px;
  height: 22px;
}

.footer-nav-title {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.footer-contacts-title {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.contacts-address,
.contacts-email,
.contacts-phone {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.banner {
  margin-top: 44px;
  width: 100%;
  height: auto;
  background-image: url("assets/img2/bg_banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}

.banner-title {
  margin-top: 178px;
  background-color: white;
  border-radius: 37px 37px 0px 0px;
  display: flex;
  padding: 41px 78px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.articles-news {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.home-blog {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.latest-post {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.latest-post-label {
  align-self: flex-start;
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
}

.latest-post-container {
  margin-top: 33px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 65px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  padding: 22px;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.latest-post-img {
  border-radius: 50px;
  width: 100%;
  height: auto;
}

.latest-post-content {
  display: flex;
  justify-content: space-around;
  gap: 22px;
  margin-right: 25px;
  flex-direction: column;
}

.latest-post-title {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

.latest-post-text {
  color: #4d5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.latest-post-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.latest-post-date {
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

.section-blog-articles {
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-articles-title {
  align-self: self-start;
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
}

.pagination {
  margin-top: 51px;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-bottom: 125px;
}

.pagination-icon {
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cda274;
  border-radius: 50%;
}

.pagination-number {
  color: #292f36;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
  text-transform: capitalize;
}

.current-page {
  background-color: #f4f0ec;
  border: none;
}
</style>
