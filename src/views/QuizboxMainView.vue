<template>
  <div class="content-wrapper">
    <LayoutHeadings :title="title" :subtitle="subtitle" />
    <select name="how-many-questions" id="questions" v-model="questionAmount">
      <option :value="10">10 questions</option>
      <option :value="20">20 questions</option>
      <option :value="30">30 questions</option>
    </select>

    <h3>Questions areas</h3>
    <ul>
      <li v-for="topic in topics" :key="topic.category">
        <label class="topic-category">
          <input
            class="category-checkbox"
            type="checkbox"
            v-model="selectedCategories"
            :value="topic.category"
          />
          <div class="category-info">
            <span class="category-name">{{ topic.category }}</span>
            <p class="question-amount">
              {{ topic.questions.length }} Questions
            </p>
          </div>
        </label>
      </li>
    </ul>
    <div class="start-button">
      <button class="btn-quizbox" @click="redirecting">Start Quizbox</button>
    </div>
  </div>
</template>

<script>
import LayoutHeadings from "@/components/LayoutHeadings.vue";
export default {
  components: { LayoutHeadings },
  data() {
    return {
      title: "Play Quizbox",
      subtitle: "Quiz time - test what you know",
      selectedCategories: [],
      sessionQuestions: [],
      questionAmount: 10,
    };
  },
  computed: {
    topics() {
      return this.$store.getters.getTopics;
    },
  },
  methods: {
    getQuestionsThatFit() {
      const amountToAdd = Math.ceil(
        this.questionAmount / this.selectedCategories.length
      );
      if (this.sessionQuestions.length + amountToAdd <= this.questionAmount) {
        return amountToAdd;
      } else {
        return this.questionAmount - this.sessionQuestions.length;
      }
    },

    filteredQuestions() {
      this.sessionQuestions = [];
      this.topics.forEach((topic) => {
        if (
          this.selectedCategories.some(
            (category) => category === topic.category
          )
        ) {
          const tempQuestions = [...topic.questions];
          const amountToAdd = this.getQuestionsThatFit();

          for (let i = 0; i < amountToAdd; i++) {
            const randomIndex = Math.floor(
              Math.random() * tempQuestions.length
            );
            const randomQuestion = tempQuestions.splice(randomIndex, 1);
            this.sessionQuestions.push(randomQuestion);
          }
        }
      });
      // to prevent empy array items
      this.sessionQuestions = this.sessionQuestions.filter(
        (question) => question.length !== 0
      );
    },
    redirecting() {
      this.filteredQuestions();
      this.$router.push({
        name: "quizbox-box",
        params: { questions: this.sessionQuestions },
      });
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}

input[type="checkbox"] {
  all: unset;
  border: solid var(--primary-color) 2px;
  margin-right: 0.5rem;
  width: 1.15rem;
  height: 1.15rem;
  transition: background-color 0.4s ease-in-out;
}

input[type="checkbox"]:checked {
  background-color: var(--primary-color);

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' focusable='false' %3E%3Cpath fill='none' stroke='white' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /%3E%3C/svg%3E");
}
</style>
