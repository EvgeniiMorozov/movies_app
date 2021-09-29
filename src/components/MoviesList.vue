<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <b-row>
      <template v-if="isExist">
        <b-col cols="3" v-for="(movie, key) in list" :key="key">
          <movie-item :movie="movie" />
        </b-col>
      </template>
    </b-row>
  </BContainer>
</template>

<script>
import MovieItem from "@/components/MovieItem";
export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    MovieItem,
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
