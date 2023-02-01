<template>
  <div class="flex flex-col group">
    <div class="relative w-full h-full aspect-9/14 bg-slate-700 rounded overflow-hidden mb-1">
      <span
        class="
          absolute
          h-8
          w-auto
          px-3
          flex
          justify-center
          items-center
          font-bold font-body
          text-white
          top-0
          right-0
          z-[1]
          bg-gray-800/50
        "
      >
        7.3
      </span>
      <img
        src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,w_750,h_1111/v1/articles/t43opdxqn1h29pk52vtr"
        alt="movie"
        class="absolute w-full h-full object-cover top-0 left-0"
      />
      <div
        class="
          absolute
          w-full
          h-0
          aspect-9/14
          group-hover:top-0 group-hover:h-full
          transition-all
          duration-300
          -top-1/2
          left-0
          bg-gray-800
          flex
          justify-center
          items-center
          rounded
        "
      >
        <div class="text-center">
          <p class="text-gray-100 font-semibold font-body text-2xl">
            <solid-star-icon class="text-yellow-500 h-8 w-auto inline-block align-sub" /> 7.3
          </p>
          <p class="my-8 font-semibold font-body text-2xl text-gray-100">ACTION</p>
          <p>
            <NuxtLink
              to="/movies/1"
              class="
                inline-flex
                h-8
                px-8
                justify-center
                items-center
                font-body
                text-sm
                rounded-full
                bg-primary
                text-white
                mx-3
              "
            >
              View
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
    <div class="">
      <h3 class="font-display text-gray-100">Wonder Women</h3>
      <p class="text-sm text-gray-500">2022</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMovie",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
