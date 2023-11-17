const app = new Vue({
  el: "#app",
  data: {
    articles: [
      {
        title: "Let’s Get Solution for Building Construction Work",
        imageUrl: "img3/article0.png",
        paragraphTwo:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        date: "26 December,2022",
        details: true,
        tags: ["Kitchen"],
      },
      {
        title: "Design sprints are great",
        paragraphOne:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. ",
        imageUrl: "img3/article1.png",
        paragraphTwo:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        tags: ["Kitchen"],
      },
    ],
    tags: [
      { name: "Kitchen" },
      { name: "Bedroom" },
      { name: "Building" },
      { name: "Architecture" },
      { name: "Kitchen Planning" },
    ],
    selectedTag: `Kitchen`,
  },
  methods: {
    filterArticlesByTag(tagName) {
      this.selectedTag = tagName;
    },
  },
  computed: {
    filteredArticles() {
      if (this.selectedTag) {
        return this.articles.filter((article) =>
          article.tags.includes(this.selectedTag)
        );
      } else {
        return this.articles;
      }
    },
  },
});
