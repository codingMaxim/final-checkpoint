<template>
  <div class="content-wrapper">
    <LayoutHeadings :title="title" :subtitle="subtitle" />
    <div class="select-group">
      <select v-model="selectedOption">
        <option v-for="category in topics" :key="category.category">
          {{ category.category }}
        </option>
      </select>
    </div>
    <div class="chapter-heading">
      <span>Questions from the chapter</span>
      <span>{{ filteredQuestions.questions?.length }}</span>
    </div>
    <ul>
      <li
        v-for="question in filteredQuestions.questions"
        :key="question.category"
      >
        {{ question }}
      </li>
    </ul>
  </div>
</template>

<script>
import LayoutHeadings from "@/components/LayoutHeadings.vue";
export default {
  components: { LayoutHeadings },

  data() {
    return {
      title: "BROWSE QUESTIONS",
      subtitle: "Choose a category with questions",
      selectedOption: "basics-html-css",
    };
  },
  computed: {
    topics() {
      return this.$store.getters.getTopics;
    },
    filteredQuestions() {
      const filtered = this.topics.filter(
        (question) => question.category === this.selectedOption
      );
      if (filtered.length === 0) {
        return [];
      }
      return filtered[0];
    },
  },
};
</script>
