import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizboxMainView from "@/views/QuizboxMainView.vue";
import BrowseQuestionsView from "@/views/BrowseQuestionsView.vue";
import QuizboxView from "@/views/QuizboxView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quizbox",
    name: "quizbox",
    component: QuizboxMainView,
  },
  {
    path: "/browse-questions",
    name: "browseQuestions",
    component: BrowseQuestionsView,
  },
  {
    path: "/quizbox-box",
    name: "quizbox-box",
    component: QuizboxView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
