<template>
  <div>
    <section class="relative pt-20 pb-12">
      <HeroSlider />
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
            <button class="inline-flex h-8 px-4 justify-center items-center font-body text-sm rounded-full bg-primary text-white mx-3">Popularity</button>
            <button class="inline-flex h-8 px-4 justify-center items-center font-body text-sm rounded-full bg-body text-gray-100">Release Date</button>
          </div>
        </div>
        <div class="grid grid-cols-5 gap-x-6 gap-y-8">
          <CardMovie />
          <CardMovie />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
