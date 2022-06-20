<template>
  <h2>{{ title }}</h2>
  <h3>{{ subtitle }}</h3>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
