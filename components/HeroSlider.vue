<template>
  <div class="hero-slider">
    <vue-tiny-slider v-if="data.length > 0" v-bind="sliderConfig">
      <div v-for="(row, index) in data" :key="index" class="px-6">
        <div class="flex flex-row bg-zinc-900">
          <div class="relative flex-none w-40">
            <div
              class="
                relative
                w-full
                h-auto
                bg-slate-700
                rounded
                aspect-9/14
                scale-125
                overflow-hidden
              "
            >
              <img
                :src="`https://image.tmdb.org/t/p/w500/${row.poster_path}`"
                :alt="row.title"
                class="absolute w-full h-full object-cover top-0 left-0"
              />
            </div>
          </div>
          <div class="flex-1 pl-10 pt-4 pr-4">
            <p class="text-white font-body text-lg mb-1">
              <solid-star-icon class="text-yellow-500 h-4 w-auto inline-block" />
              {{ row.vote_average }}
            </p>
            <h3 class="font-display font-medium text-xl text-gray-100">{{ row.title }}</h3>
            <p class="text-gray-400 mb-2">
              {{ $dayjs(row.release_date).format("YYYY") }}
              <span class="mx-1">&#x2022;</span> Sci-FI
            </p>
            <div class="text-gray-100 text-xs">
              {{ row.overview }}
            </div>
          </div>
        </div>
      </div>
    </vue-tiny-slider>
  </div>
</template>

<script>
export default {
  name: "HeroSlider",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      movieData: [1, 2, 3, 4],
      sliderConfig: {
        className: "center",
        controls: false,
        center: true,
        loop: true,
        edgePadding: 420,
        slidesToShow: 1,
        speed: 600,
        mouseDrag: true,
        swipeAngle: false,
        navPosition: "bottom",
      },
    };
  },
};
</script>
