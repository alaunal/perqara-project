<template>
  <div class="pt-16">
    <section class="relative pt-16 pb-20">
      <div class="absolute w-full h-80 bg-header top-0 left-0"></div>
      <div class="container mx-auto relative">
        <div class="flex w-full justify-between items-center mb-14">
          <div class="relative pt-3 inline-block">
            <span class="absolute h-1 bg-maroon w-3/5 top-0 left-0"></span>
            <h2 class="font-display text-2xl text-gray-100">Movies</h2>
          </div>
        </div>
        <div class="flex">
          <div class="w-60">
            <div class="bg-gray-800 rounded py-4 flex flex-col">
              <div class="px-4 py-3 border-b border-gray-700">
                <h4 class="text-gray-100 text-lg font-semibold font-body">Sort Result By</h4>
              </div>
              <div class="px-4 py-3 border-b border-gray-700">
                <select
                  class="
                    block
                    w-full
                    rounded-full
                    border-0
                    text-sm
                    bg-input
                    text-gray-100
                    font-body
                    focus:bg-zinc-800 focus:ring-0
                  "
                >
                  <option value="">Popularity</option>
                  <option value="">Popularity Ascending</option>
                  <option value="">Popularity Descending</option>
                  <option value="">Release Date Ascending</option>
                  <option value="">Release Date Descending</option>
                  <option value="">Rating Ascending</option>
                  <option value="">Rating Descending</option>
                </select>
              </div>
              <div class="px-4 py-3">
                <div class="flex justify-between items-center py-1">
                  <label for="check-action" class="font-body text-sm text-gray-100">Movie</label>
                  <div>
                    <input
                      id="check-action"
                      type="checkbox"
                      class="
                        bg-gray-700
                        rounded
                        border-gray-600
                        text-indigo-600
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                    />
                  </div>
                </div>
                <div class="flex justify-between items-center py-1">
                  <label for="check-adventure" class="font-body text-sm text-gray-100">Adventure</label>
                  <div>
                    <input
                      id="check-adventure"
                      type="checkbox"
                      class="
                        bg-gray-700
                        rounded
                        border-gray-600
                        text-indigo-600
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 pl-8">
            <div class="grid grid-cols-4 gap-x-6 gap-y-8">
              <CardMovie />
              <CardMovie />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MoviePage",
};
</script>
