<template>
  <SiteHeader />
  <router-view />
</template>
<script>
import SiteHeader from "@/components/SiteHeader.vue";
export default {
  components: { SiteHeader },

  created() {
    this.$store.dispatch("getTopics");
  },
};
</script>
