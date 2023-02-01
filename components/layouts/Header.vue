<template>
  <header
    class="fixed top-0 left-0 w-full h-16 flex items-center justify-center z-10 transition-colors duration-300"
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
              />
              <span class="absolute h-full right-4 top-0 flex items-center">
                <outline-search-icon class="text-gray-50 w-4 h-auto" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <nav>
            <a
              v-on-clickaway="away"
              href="javascript:;"
              class="text-gray-100 mx-5 hover:text-gray-200 font-body text-sm relative"
              @click="toggle"
            >
              <solid-view-grid-icon class="w-5 h-auto inline-block mr-1" /> Categories

              <div
                class="absolute left-0 top-8 bg-white rounded z-10 py-2 min-w-[10rem]"
                :class="categoryToggle ? 'block' : 'hidden'"
              >
                <nav>
                  <NuxtLink
                    to="/"
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
                    >Action</NuxtLink
                  >
                  <NuxtLink
                    to="/"
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
                    >Action</NuxtLink
                  >
                </nav>
              </div>
            </a>
            <NuxtLink to="/Movies" class="text-gray-100 mx-5 hover:text-gray-200 font-body text-sm">
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
import { mixin as clickaway } from "vue-clickaway";
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
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggle() {
      this.categoryToggle = !this.categoryToggle;
    },
    away() {
      this.categoryToggle = false;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
