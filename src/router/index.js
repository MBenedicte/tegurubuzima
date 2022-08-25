
import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/contactus",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/projects",
    name: "ProjectsPage",
    component: ProjectsPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;