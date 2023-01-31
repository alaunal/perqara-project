<template>
  <header class="fixed top-0 left-0 w-full bg-header h-16 flex items-center justify-center z-10">
    <div class="container mx-auto">
      <div class="flex w-full justify-between items-center">
        <div class="flex items-center flex-1">
          <div>
            <img :src="logoMovieTime" alt="logo" class="h-8 inline-block" />
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
              href=""
              class="
                text-gray-100
                mx-5
                hover:text-gray-200
                font-body
                text-sm
              "
            >
              <solid-view-grid-icon class="w-5 h-auto inline-block mr-1" /> Categories
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
import logoMovieTime from "@/assets/images/MoovieTime-Logo.svg";

export default {
  name: "HeaderComponent",
  data() {
    return {
      logoMovieTime,
    };
  },
};
</script>
