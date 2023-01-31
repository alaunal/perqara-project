<template>
  <footer class="relative top-0 left-0 w-full bg-footer h-40 flex items-center justify-center">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-400 font-body">© 2021 MoovieTime. All rights reserved.</p>
        </div>
        <div>
          <img :src="logoMovieTime" alt="brand" class="h-7 w-auto inline-block">
        </div>
        <div>
          <p class="text-sm text-gray-400">
            Made with <strong class="text-green-700 font-body font-bold">Nuxt.js</strong>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logoMovieTime from "@/assets/images/MoovieTime-Logo-Grey.svg";

export default {
  name: "FooterComponent",
  data() {
    return {
      logoMovieTime,
    };
  },
};
</script>
