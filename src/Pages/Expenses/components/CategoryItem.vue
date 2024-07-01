<template>
  <li class="flex items-center rounded-lg bg-indigo-50 pl-4">
    <span class="capitalize">
      {{ category }}
    </span>
    <i
      class="pi pi-times cursor-pointer px-4 py-2 text-xs font-bold text-slate-500"
      @click="handleDeleteCategory(category)"
    ></i>
  </li>
</template>

<script setup lang="ts">
import { useCategoryStore } from "@/stores/category";

defineProps<{ category: string }>();

const categoryStore = useCategoryStore();

//methods
const handleDeleteCategory = (category: string) => {
  categoryStore.removeCategory(category);
};
</script>

<style scoped></style>
