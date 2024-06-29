<template>
  <li class="flex items-center rounded-lg bg-indigo-100 pl-4 text-indigo-500">
    <span class="capitalize">
      {{ category }}
    </span>
    <i
      class="pi pi-times cursor-pointer px-4 py-2 text-xs font-bold"
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
