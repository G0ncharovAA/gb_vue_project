import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home.vue";
import Project from "@/components/Project.vue";
import Blog from "@/components/Blog.vue";
import NotFound from "@/components/NotFound.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/project",
      name: "project",
      component: Project,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});

export default router;
