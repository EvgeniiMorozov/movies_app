<template>
  <div>
    <div class="mt-3">
      <b-button-group>
        <b-button variant="success">Success</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="warning">Warning</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  mounted() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions("moviesStore", ["fetchMovies"]),
  },
};
</script>

<style></style>
