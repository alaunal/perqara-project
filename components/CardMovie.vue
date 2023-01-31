<template>
  <div class="flex flex-col">
    <div class="relative w-full h-full aspect-9/14 bg-slate-700 rounded overflow-hidden mb-1"></div>
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
