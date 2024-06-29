<template>
  <RouterLink
    to=""
    class="rounded-xl p-1"
    active-class="bg-indigo-100 text-indigo-500 font-bold [&_i]:text-indigo-500"
  >
    <div
      class="grid place-content-center rounded-lg border bg-white p-2 text-[.8rem] text-slate-500"
    >
      <i :class="icon"></i>
    </div>
    <span><slot /></span>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{ icon: string }>();
</script>

<style scoped></style>
