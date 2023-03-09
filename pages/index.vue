<template>
  <div class="pt-16">
    <section class="relative pt-20 pb-12">
      <HeroSlider v-if="movieUpComing.length > 0" :data="movieUpComing" />
    </section>
    <section class="relative pt-20 pb-28">
      <div class="absolute w-full h-80 bg-header top-0 left-0"></div>
      <div class="container mx-auto relative">
        <div class="flex w-full justify-between items-center mb-11">
          <div>
            <div class="relative pt-3 inline-block">
              <span class="absolute h-1 bg-maroon w-3/5 top-0 left-0"></span>
              <h2 class="font-display text-2xl text-gray-100">Discover Movies</h2>
            </div>
          </div>
          <div>
            <button
              class="
                inline-flex
                h-8
                px-4
                justify-center
                items-center
                font-body
                text-sm
                rounded-full
                mx-3
              "
              :class="tab === 'popular' ? 'bg-primary text-white' : 'bg-body text-gray-100'"
              @click="getMoviePopular"
            >
              Popularity
            </button>
            <button
              class="
                inline-flex
                h-8
                px-4
                justify-center
                items-center
                font-body
                text-sm
                rounded-full
              "
              :class="tab === 'releaseDate' ? 'bg-primary text-white' : 'bg-body text-gray-100'"
              @click="getMovieReleaseDate"
            >
              Release Date
            </button>
          </div>
        </div>

        <div v-if="tab === 'popular'">
          <div v-if="moviePopularLoading" class="grid grid-cols-5 gap-x-6 gap-y-8 animate-pulse">
            <div class="relative w-full h-auto aspect-9/14 bg-slate-700 rounded"></div>
            <div class="relative w-full h-auto aspect-9/14 bg-slate-700 rounded"></div>
            <div class="relative w-full h-auto aspect-9/14 bg-slate-700 rounded"></div>
          </div>

          <div v-if="moviePopularLoading === false && moviePopular.length > 0" class="grid grid-cols-5 gap-x-6 gap-y-8">
            <CardMovie v-for="item in moviePopular" :key="item.id" :data="item" :route="`movies`" />
          </div>
        </div>

        <div v-if="tab === 'releaseDate'">
          <div v-if="movieReleaseDateLoading" class="grid grid-cols-5 gap-x-6 gap-y-8 animate-pulse">
            <div class="relative w-full h-auto aspect-9/14 bg-slate-700 rounded"></div>
            <div class="relative w-full h-auto aspect-9/14 bg-slate-700 rounded"></div>
            <div class="relative w-full h-auto aspect-9/14 bg-slate-700 rounded"></div>
          </div>

          <div v-if="movieReleaseDateLoading === false && movieReleaseDate.length > 0" class="grid grid-cols-5 gap-x-6 gap-y-8">
            <CardMovie
              v-for="item in movieReleaseDate"
              :key="item.id"
              :data="item"
              :route="`movies`"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $api }) {
    const { data } = await $api.movies.getUpComing();

    return {
      movieUpComing: data.results.slice(0, 5),
    }
  },
  data() {
    return {
      moviePopular: [],
      moviePopularLoading: false,
      movieReleaseDate: [],
      movieReleaseDateLoading: false,
      tab: "popular",
    };
  },
  created() {
    this.getMoviePopular();
    // this.getMovieUpComing();
  },
  methods: {
    async getMoviePopular() {
      this.tab = "popular";

      if (this.moviePopular.length < 1) {
        this.moviePopularLoading = true;
        try {
          const { data } = await this.$api.movies.getPopular();

          if (data.results.length > 0) {
            this.moviePopular = data.results;
          }

          this.moviePopularLoading = false;
        } catch (error) {
          this.moviePopularLoading = false;
        }
      }
    },
    async getMovieReleaseDate() {
      this.tab = "releaseDate";

      if (this.movieReleaseDate.length < 1) {
        this.movieReleaseDateLoading = true;
        try {
          const { data } = await this.$api.movies.getReleaseDate();

          if (data.results.length > 0) {
            this.movieReleaseDate = data.results;
          }

          this.movieReleaseDateLoading = false;
        } catch (error) {
          this.movieReleaseDateLoading = false;
        }
      }
    },
  },
};
</script>
