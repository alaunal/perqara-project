<template>
  <div>
    <h1>
      {{ error.statusCode === 404 ? pageNotFound : otherError }}
    </h1>
    <NuxtLink to="/" class="mt-20"> Home Page </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "ErrorLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
