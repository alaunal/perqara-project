<template>
  <header
    class="
      fixed
      top-0
      left-0
      w-full
      h-16
      flex
      items-center
      justify-center
      z-10
      transition-colors
      duration-300
    "
    :class="scrollPosition > 48 ? 'bg-header' : 'header'"
  >
    <div class="container mx-auto">
      <div class="flex w-full justify-between items-center">
        <div class="flex items-center flex-1">
          <div>
            <NuxtLink to="/">
              <img :src="logoMovieTime" alt="logo" class="h-8 inline-block" />
            </NuxtLink>
          </div>
          <div class="px-10 flex-1">
            <div class="relative w-full">
              <input
                v-model="keyword"
                type="text"
                placeholder="find movie ..."
                class="
                  relative
                  mt-1
                  h-10
                  flex
                  w-full
                  rounded-md
                  border-0
                  bg-input
                  text-gray-100
                  font-body
                  focus:bg-zinc-800 focus:ring-0
                "
                :disabled="searchLoading"
                @focus="isFocusSearch = true"
                @blur="isFocusSearch = false"
              />
              <span class="absolute h-full right-4 top-0 flex items-center">
                <svg
                  v-if="searchLoading"
                  class="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <outline-search-icon v-else class="text-gray-50 w-4 h-auto" />
              </span>

              <div
                v-if="dataKeywords.length > 0 && isFocusSearch"
                class="
                  absolute
                  w-full
                  rounded-b-lg
                  bg-zinc-900
                  py-4
                  left-0
                  text-white
                  max-h-96
                  overflow-auto
                "
              >
                <ul>
                  <li
                    v-for="(item, index) in dataKeywords"
                    :key="index"
                    class="block px-4 py-2 text-white bg-transparent hover:bg-zinc-800"
                    @click="detailMovie(item.id)"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <nav>
            <a
              v-if="genres.length > 0"
              v-on-clickaway="away"
              href="javascript:;"
              class="text-gray-100 mx-5 hover:text-gray-200 font-body text-sm relative"
              @click="toggle"
            >
              <solid-view-grid-icon class="w-5 h-auto inline-block mr-1" /> Categories

              <div
                class="
                  absolute
                  left-0
                  top-8
                  bg-white
                  rounded
                  z-10
                  py-2
                  min-w-[10rem]
                  max-h-96
                  overflow-auto
                "
                :class="categoryToggle ? 'block' : 'hidden'"
              >
                <nav>
                  <NuxtLink
                    v-for="(item, index) in genres"
                    :key="index"
                    :to="`/movies?category=${item.id}`"
                    class="
                      block
                      px-3
                      py-1
                      font-body
                      text-sm
                      font-medium
                      text-gray-800
                      hover:bg-gray-50
                    "
                  >
                    {{ item.name }}
                  </NuxtLink>
                </nav>
              </div>
            </a>
            <NuxtLink to="/movies" class="text-gray-100 mx-5 hover:text-gray-200 font-body text-sm">
              Movies
            </NuxtLink>
            <NuxtLink
              to="/tv-shows"
              class="text-gray-100 mx-5 hover:text-gray-200 font-body text-sm"
            >
              TV shows
            </NuxtLink>
            <NuxtLink to="/login" class="text-gray-100 mx-5 hover:text-gray-200 font-body text-sm">
              Login
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";
import debounce from "lodash.debounce";
import logoMovieTime from "@/assets/images/MoovieTime-Logo.svg";

export default {
  name: "HeaderComponent",
  mixins: [clickaway],
  provide() {
    return {
      categoryToggle: this.categoryToggle,
    };
  },
  data() {
    return {
      logoMovieTime,
      categoryToggle: false,
      scrollPosition: null,
      searchLoading: false,
      isFocusSearch: false,
      keyword: "",
      dataKeywords: [],
    };
  },
  computed: mapState("genre", ["genres"]),
  watch: {
    keyword(...args) {
      this.debouncedWatch(...args);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  created() {
    this.getGenre();

    this.debouncedWatch = debounce((newValue, oldValue) => {
      // console.log('New value:', newValue);
      const newKeywords = newValue.trim();
      if (newKeywords.length > 2) {
        this.getKeyword();
      } else {
        this.dataKeywords = [];
      }
    }, 350);
  },
  beforeUnmount() {
    this.debouncedWatch.cancel();
  },
  methods: {
    ...mapActions("genre", ["getGenre"]),
    toggle() {
      this.categoryToggle = !this.categoryToggle;
    },
    away() {
      this.categoryToggle = false;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    detailMovie(id) {
      this.keyword = '';
      this.dataKeywords = [];
      this.isFocusSearch = false;
      this.$router.push({path: `/movies/${id}`});
    },
    async getKeyword() {
      this.searchLoading = true;

      try {
        const { data } = await this.$api.general.getKeywords(this.keyword);

        this.dataKeywords = data.results;

        this.searchLoading = false;
        this.isFocusSearch = true;
      } catch (error) {
        this.searchLoading = false;
        this.isFocusSearch = true;
      }
    },
  },
};
</script>
