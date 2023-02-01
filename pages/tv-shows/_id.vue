<template>
  <div class="">
    <section class="w-full bg-white block relative">
      <div class="relative w-full h-96 bg-gray-50 overflow-hidden">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${dataMovie.backdrop_path}`"
          :alt="dataMovie.title"
          class="absolute top-0 left-0 w-full h-auto object-conver"
        />
        <div class="z-[1] bg-gray-800/50 h-full w-full absolute top-0 left-0" />
        <div class="z-[1] w-full absolute bottom-0 left-0">
          <div class="w-full mb-8 flex items-center justify-center">
            <div class="container">
              <div class="flex">
                <div class="w-52"></div>
                <div class="flex-1 pl-9">
                  <p class="font-body text-gray-50 text-sm mb-1">
                    {{ $dayjs(dataMovie.release_date).format("YYYY") }}
                  </p>
                  <h1 class="font-body text-white font-semibold text-3xl mb-1">
                    {{ dataMovie.title }}
                  </h1>
                  <p class="font-body text-gray-50 text-xs">Fantasy, Action, Adventure</p>
                </div>
              </div>
            </div>
          </div>

          <div class="h-20 w-full bg-gray-900/75 flex items-center justify-center">
            <div class="container">
              <div class="flex">
                <div class="w-52"></div>
                <div class="flex-1 pl-9">
                  <div class="flex divide-x divide-gray-400">
                    <div class="flex items-center pr-8">
                      <div class="text-gray-100 font-semibold font-body text-2xl">
                        <solid-star-icon
                          class="text-yellow-500 h-8 w-auto inline-block align-sub"
                        />
                        {{ Math.round(dataMovie.vote_average * 10) / 10 }}
                      </div>
                      <div class="pl-4">
                        <p class="uppercase text-gray-400 text-xs font-body">User Score</p>
                        <p class="uppercase text-gray-50 text-xs font-body">
                          {{ dataMovie.vote_count }} Votes
                        </p>
                      </div>
                    </div>
                    <div class="px-8">
                      <p class="uppercase text-gray-400 text-xs font-body">Status</p>
                      <p class="uppercase text-gray-50 text-xs font-body">{{ dataMovie.status }}</p>
                    </div>
                    <div class="px-8">
                      <p class="uppercase text-gray-400 text-xs font-body">Language</p>
                      <p class="uppercase text-gray-50 text-xs font-body">
                        {{ dataMovie.original_language }}
                      </p>
                    </div>
                    <div class="px-8">
                      <p class="uppercase text-gray-400 text-xs font-body">budget</p>
                      <p class="uppercase text-gray-50 text-xs font-body">
                        {{
                          new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(dataMovie.budget)
                        }}
                      </p>
                    </div>
                    <div class="px-8">
                      <p class="uppercase text-gray-400 text-xs font-body">production</p>
                      <p class="uppercase text-gray-50 text-xs font-body">
                        Lightstorm Entertainment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto relative z-[1] -mt-52">
        <div class="flex items-end">
          <div class="relative w-52">
            <div class="relative w-full h-full bg-slate-700 rounded aspect-9/14 overflow-hidden">
              <img
                :src="`https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}`"
                :alt="dataMovie.title"
                class="absolute w-full h-full object-cover top-0 left-0"
              />
            </div>
          </div>
          <div class="w-1/2 pl-9">
            <h2 class="uppercase text-primary font-semibold mb-2">Overview</h2>
            <p class="text-gray-700 text-sm">
              {{ dataMovie.overview }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full bg-white py-14">
      <div class="container mx-auto">
        <div class="relative pt-3 inline-block mb-10">
          <span class="absolute h-1 bg-maroon w-3/5 top-0 left-0"></span>
          <h2 class="font-display text-2xl text-gray-700">Reviews</h2>
        </div>
        <div v-if="dataReview.length > 0" class="grid grid-cols-2 gap-9">
          <div
            v-for="item in dataReview"
            :key="item.id"
            class="bg-gray-50 shadow rounded-xl block p-6"
          >
            <div class="flex justify-between items-center w-full mb-8">
              <div class="flex items-center">
                <div
                  class="
                    aspect-square
                    h-10
                    w-auto
                    bg-gray-200
                    rounded-full
                    relative
                    overflow-hidden
                  "
                >
                  <img
                    v-if="item.author_details.avatar_path !== null"
                    :src="`https://image.tmdb.org/t/p/w500/${item.author_details.avatar_path}`"
                    :alt="item.author"
                    class="absolute w-full h-full object-cover top-0 left-0"
                  />
                </div>
                <div class="pl-4">
                  <h4 class="font-semibold font-body text-gray-700 text-sm">{{ item.author }}</h4>
                  <p class="text-xs font-body text-gray-500">
                    {{ $dayjs(item.updated_at).format("MMMM DD, YYYY") }}
                  </p>
                </div>
              </div>
              <div class="bg-gray-200 rounded px-2 py-1 flex">
                <span class="">
                  <solid-star-icon class="text-yellow-500 h-4 w-auto inline-block" />
                </span>
                <span class="pl-1 font-semibold text-xl text-gray-800">{{
                  item.author_details.rating
                }}</span>
              </div>
            </div>
            <div class="text-gray-600 text-xs italic font-body">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-16">
      <div class="container mx-auto">
        <div class="relative pt-3 inline-block mb-10">
          <span class="absolute h-1 bg-maroon w-3/5 top-0 left-0"></span>
          <h2 class="font-display text-2xl text-gray-100">Recommendation Movies</h2>
        </div>

        <div v-if="dataRecommendMovie.length > 0" class="grid grid-cols-5 gap-x-6 gap-y-8">
          <CardMovie
            v-for="item in dataRecommendMovie"
            :key="item.id"
            :data="item"
            :route="`tv-shows`"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MovieDetailPage",
  data() {
    return {
      dataMovie: {},
      dataReview: [],
      dataRecommendMovie: [],
    };
  },
  created() {
    this.getDetail();
    this.getReview();
    this.getRecommend();
  },
  methods: {
    async getDetail() {
      try {
        const { data } = await this.$api.tvShows.getDetail(this.$route.params.id);

        if (data) {
          this.dataMovie = data;
        }
      } catch (error) {}
    },
    async getReview() {
      try {
        const { data } = await this.$api.tvShows.getReview(this.$route.params.id);

        if (data.results.length > 0) {
          this.dataReview = data.results.slice(0, 4);
        }
      } catch (error) {}
    },
    async getRecommend() {
      try {
        const { data } = await this.$api.tvShows.getRecommendation(this.$route.params.id);

        if (data.results.length > 0) {
          this.dataRecommendMovie = data.results.slice(0, 10);
        }
      } catch (error) {}
    },
  },
};
</script>
