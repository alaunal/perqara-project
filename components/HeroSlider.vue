<template>
  <div class="hero-slider">
    <vue-tiny-slider v-bind="sliderConfig">
      <div v-for="(row, index) in movieData" :key="index" class="px-6">
        <div class="flex flex-row bg-zinc-900">
          <div class="relative flex-none w-40">
            <div
              class="
                relative
                w-full
                h-full
                bg-slate-700
                rounded
                aspect-9/14
                scale-125
                overflow-hidden
              "
            >
              <img
                src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,w_750,h_1111/v1/articles/t43opdxqn1h29pk52vtr"
                alt="movie"
                class="absolute w-full h-full object-cover top-0 left-0"
              />
            </div>
          </div>
          <div class="flex-1 pl-10 pt-6 pr-4">
            <p class="text-white font-body text-lg mb-1">
              <solid-star-icon class="text-yellow-500 h-4 w-auto inline-block" /> 7.3
            </p>
            <h3 class="font-display font-medium text-2xl text-gray-100">Wonder Women</h3>
            <p class="text-gray-400 mb-2">2022 <span class="mx-1">&#x2022;</span> Sci-FI</p>
            <div class="text-gray-100 text-xs">
              When the crew of a space junk collector ship called The Victory discovers a humanoid
              robot named Dorothy that's known to be a weapon of mass destruction, they get involved
              in a risky business deal which puts their lives at stake.
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
      type: Object,
      default() {
        return {};
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
