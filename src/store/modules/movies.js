import axios from "@/plugins/axios";
import IDs from "@/store/mock/imdb_top250";

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
  },
  getters: {
    slicedIDs:
      ({ top250IDs }) =>
      (from, to) =>
        top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
  },
  mutations: {},
  actions: {
    async fetchMovies({ getters }) {
      const { currentPage, moviesPerPage, slicedIDs } = getters;
      const from = currentPage * moviesPerPage - moviesPerPage;
      const to = currentPage * moviesPerPage;
      const moviesToFetch = slicedIDs(from, to);
      const requests = moviesToFetch.map((id) => axios.get(`/?=${id}`));
      const response = await Promise.all(requests);
      console.log(response);
    },
  },
};

export default moviesStore;
