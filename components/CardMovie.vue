<template>
  <div class="flex flex-col group">
    <div class="relative w-full h-auto aspect-9/14 bg-slate-700 rounded overflow-hidden mb-1">
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
        {{ data.vote_average }}
      </span>
      <img
        :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`"
        :alt="data.title"
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
            <solid-star-icon class="text-yellow-500 h-8 w-auto inline-block align-sub" />
            {{ data.vote_average }}
          </p>
          <p
            v-if="genres.length > 1"
            class="my-8 font-semibold font-body text-2xl text-gray-100 uppercase"
          >
            {{ setGenre(data.genre_ids) }}
          </p>
          <p>
            <NuxtLink
              :to="`/${route}/${data.id}`"
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
      <h3 class="font-display text-gray-100">{{ data.title }}</h3>
      <p class="text-sm text-gray-500">{{ $dayjs(data.release_date).format("YYYY") }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CardMovie",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    route: {
      type: String,
      default() {
        return "";
      },
    }
  },
  data() {
    return {};
  },

  computed: mapState("genre", ["genres"]),
  methods: {
    setGenre(item) {
      const filterGenre = this.genres.filter((row) => row.id === item[0]);

      return filterGenre.length > 0 ? filterGenre[0].name : "action";
    },
  },
};
</script>
