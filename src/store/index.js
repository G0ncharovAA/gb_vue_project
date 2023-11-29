import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    articlesCarousel: [],
    articlesList: [],
    projectsList: [],
  },
  gettters: {
    getArticlesCarousel: (state) => state.articlesCarousel,
    getArticlesList: (state) => state.articlesList,
    getProjectsList: (state) => state.projectsList,
  },
  mutations: {
    setArticlesCarousel: (state, articlesCarousel) => {
      state.articlesCarousel = articlesCarousel;
    },
    setArticlesList: (state, articlesList) => {
      state.articlesList = articlesList;
    },
    setProjectsList: (state, projectsList) => {
      state.projectsList = projectsList;
    },
  },
  actions: {
    fetchArticlesCarousel: ({ commit }) => {
      const articles = [
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
      ];
      commit("setArticlesCarousel", articles);
    },
    fetchArticlesList: ({ commit }) => {
      const articles = [
        {
          title: "Let’s Get Solution for Building Construction Work",
          imageUrl: "article0.png",
          paragraphTwo:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "26 December,2022",
          details: true,
          tags: ["Kitchen"],
        },
        {
          title: "Design sprints are great",
          paragraphOne:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          imageUrl: "article1.png",
          paragraphTwo:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          tags: ["Kitchen"],
        },
      ];
      commit("setArticlesList", articles);
    },
    fetchProjectsList: ({ commit }) => {
      const projects = [
        {
          title: "Minimal Bedroom",
          imageUrl: "project/card0.png",
          favored: true,
          tabs: ["Bed Room"],
        },
        {
          title: "Classic Minimal Bedroom",
          imageUrl: "project/card1.png",
          favored: false,
          tabs: ["Bed Room"],
        },
        {
          title: "Minimal Bedroom table",
          imageUrl: "project/card2.png",
          favored: false,
          tabs: ["Bed Room"],
        },
        {
          title: "Modern Medroom",
          imageUrl: "project/card3.png",
          favored: false,
          tabs: ["Bed Room"],
        },
        {
          title: "Minimal Bedroom",
          imageUrl: "project/card4.png",
          favored: false,
          tabs: ["Bed Room"],
        },
        {
          title: "Modern Bedroom",
          imageUrl: "project/card5.png",
          favored: true,
          tabs: ["Bed Room"],
        },
        {
          title: "System Table",
          imageUrl: "project/card6.png",
          favored: false,
          tabs: ["Bed Room"],
        },
        {
          title: "Modern Bedroom",
          imageUrl: "project/card8.png",
          favored: false,
          tabs: ["Bed Room"],
        },
      ];
      commit("setProjectsList", projects);
    },
  },
});

export default store;
