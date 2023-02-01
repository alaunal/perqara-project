export const state = () => ({
  genres: [],
});

export const getters = {}

export const actions = {
  async getGenre(context) {
    const { data } = await this.$api.general.getGenre();

    if (data.genres.length > 0) {
      context.commit("ADD_GENRE", data.genres);
    }

    return data.genres;
  },
};

export const mutations = {
  ADD_GENRE(state, genre) {
    state.genres.push(...genre);
  }
}
