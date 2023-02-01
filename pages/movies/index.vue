<template>
  <div class="pt-16">
    <section class="relative pt-16 pb-20">
      <div class="absolute w-full h-80 bg-header top-0 left-0"></div>
      <div class="container mx-auto relative">
        <div class="flex w-full justify-between items-center mb-14">
          <div class="relative pt-3 inline-block">
            <span class="absolute h-1 bg-maroon w-3/5 top-0 left-0"></span>
            <h2 class="font-display text-2xl text-gray-100">Movies</h2>
          </div>
        </div>
        <div class="flex">
          <div class="w-60">
            <div class="bg-gray-800 rounded py-4 flex flex-col">
              <div class="px-4 py-3 border-b border-gray-700">
                <h4 class="text-gray-100 text-lg font-semibold font-body">Sort Result By</h4>
              </div>
              <div class="px-4 py-3 border-b border-gray-700">
                <select
                  class="
                    block
                    w-full
                    rounded-full
                    border-0
                    text-sm
                    bg-input
                    text-gray-100
                    font-body
                    focus:bg-zinc-800 focus:ring-0
                  "
                >
                  <option value="1" selected>Popularity</option>
                  <option value="2">Popularity Ascending</option>
                  <option value="3">Popularity Descending</option>
                  <option value="4">Release Date Ascending</option>
                  <option value="5">Release Date Descending</option>
                  <option value="6">Rating Ascending</option>
                  <option value="7">Rating Descending</option>
                </select>
              </div>
              <div v-if="genres.length > 0" class="px-4 py-3">
                <div
                  v-for="item in genres"
                  :key="item.id"
                  class="flex justify-between items-center py-1"
                >
                  <label :for="`check-${item.id}`" class="font-body text-sm text-gray-100">{{
                    item.name
                  }}</label>
                  <div>
                    <input
                      :id="`check-${item.id}`"
                      type="checkbox"
                      class="
                        bg-gray-700
                        rounded
                        border-gray-600
                        text-indigo-600
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 pl-8">
            <div v-if="moviePopular.length > 0" class="grid grid-cols-4 gap-x-6 gap-y-8">
              <CardMovie v-for="item in moviePopular" :key="item.id" :data="item" :route="`movies`" />
            </div>

            <div v-if="currentPage < totalPage" class="mt-10 flex justify-center">
              <button
                class="
                  inline-flex
                  h-10
                  px-6
                  justify-center
                  items-center
                  font-body
                  text-sm
                  rounded-full
                  bg-primary
                  text-white
                "
                :disabled="moviePopularLoading"
                @click="getMoviePopular"
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MoviePage",
  data() {
    return {
      moviePopular: [],
      moviePopularLoading: false,
      currentPage: 1,
      totalPage: 0,
    };
  },
  computed: mapState("genre", ["genres"]),
  created() {
    this.getMoviePopular();
  },
  methods: {
    async getMoviePopular() {
      this.moviePopularLoading = true;
      try {
        const { data } = await this.$api.movies.getPopular(this.currentPage);

        if (data.results.length > 0) {
          this.moviePopular.push(...data.results);
          this.currentPage = this.currentPage + 1;
          this.totalPage = data.total_pages;
        }

        this.moviePopularLoading = false;
      } catch (error) {
        this.moviePopularLoading = false;
      }
    },
  },
};
</script>
