<template>
  <div>Movie {{ movie.Title }}</div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>
