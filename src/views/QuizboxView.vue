<template>
  <div class="content-wrapper">
    <LayoutHeadings :title="title" :subtitle="getString" />
    <p>{{ skipToNextQuestion }}</p>
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
