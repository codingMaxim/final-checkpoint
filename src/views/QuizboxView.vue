<template>
  <div class="content-wrapper">
    <LayoutHeadings :title="title" :subtitle="getString" />
    <h3>{{ skipToNextQuestion }}</h3>
    <div class="btn-center">
      <button
        class="btn-quizbox"
        @click="this.counter++"
        v-if="this.counter < this.questions?.length"
      >
        Next Question
      </button>
      <button class="btn-quizbox" v-else @click="backToPlayNewQuizbox">
        Play New Quiz
      </button>
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
      questions: this.$route.params.questions,
      counter: 0,
      length: this.questions?.length,
    };
  },
  computed: {
    skipToNextQuestion() {
      if (this.counter < this.questions?.length) {
        return this.questions[this.counter];
      } else {
        return "Wanna play new Quiz?";
      }
    },
    getString() {
      return "Question count " + this.counter + "/" + this.questions?.length;
    },
  },
  methods: {
    backToPlayNewQuizbox() {
      this.$router.push({
        name: "quizbox",
      });
    },
  },
  beforeCreate() {
    if (!this.$route.params.questions) {
      this.$router.push({
        name: "quizbox",
      });
    }
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-weight: 600;
}
.btn-center {
  text-align: center;
}
</style>
