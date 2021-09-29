<template>
  <div id="app">
    <movies-list :list="moviesList" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";

export default {
  name: "App",
  components: {
    MoviesList,
  },
  computed: {
    ...mapGetters("moviesStore", ["moviesList"]),
  },
  methods: {
    ...mapActions("moviesStore", ["fetchMovies"]),
  },
};
</script>

<style></style>
