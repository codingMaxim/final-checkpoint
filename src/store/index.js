import { createStore } from "vuex";

export default createStore({
  state: {
    topics: [],
  },
  getters: {
    getTopics(state) {
      return state.topics;
    },
  },
  mutations: {
    ADD_TOPICS(state, topics) {
      state.topics = topics;
    },
  },
  actions: {
    async getTopics({ commit }) {
      const topics = [
        {
          category: "basics-html-css",
          url: "https://raw.githubusercontent.com/coding-bootcamps-eu/quizbox/main/questions/basics-html-css.json",
        },
        {
          category: "advanced-html-css",
          url: "https://raw.githubusercontent.com/coding-bootcamps-eu/quizbox/main/questions/advanced-html-css.json",
        },
        {
          category: "basics-js",
          url: "https://raw.githubusercontent.com/coding-bootcamps-eu/quizbox/main/questions/basics-js.json",
        },
        {
          category: "first-js-web-app",
          url: "https://raw.githubusercontent.com/coding-bootcamps-eu/quizbox/main/questions/first-js-web-app.json",
        },
        {
          category: "terminal-and-shell",
          url: "https://raw.githubusercontent.com/coding-bootcamps-eu/quizbox/main/questions/terminal-and-shell.json",
        },
      ];

      for (let i = 0; i < topics.length; i++) {
        const topic = topics[i];
        const res = await fetch(topic.url);
        const jsonData = await res.json();
        topic.questions = jsonData.questions;
      }

      commit("ADD_TOPICS", topics);
    },
  },
  modules: {},
});
