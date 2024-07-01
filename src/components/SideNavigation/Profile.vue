<template>
  <div class="flex items-center gap-3 font-medium text-slate-500">
    <img :src="image" alt="" class="max-w-[2rem] rounded-full" />

    <div class="hidden grow items-center justify-between md:flex">
      <span class="line-clamp-1">{{ name }}</span>
      <i class="pi pi-sign-out ml-auto cursor-pointer p-2"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string; name: string }>();
</script>

<style scoped></style>
