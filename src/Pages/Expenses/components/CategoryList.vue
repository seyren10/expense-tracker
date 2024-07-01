<template>
  <ul>
    <CategoryItem
      v-for="category in categories"
      :key="category"
      :category="category"
    ></CategoryItem>

    <CategoryAdd
      class="flex cursor-pointer items-center gap-3 rounded-lg bg-indigo-50 text-indigo-500"
    ></CategoryAdd>
  </ul>
</template>

<script setup lang="ts">
import CategoryItem from "./CategoryItem.vue";
import CategoryAdd from "./CategoryAdd.vue";

defineProps<{ categories: readonly string[] }>();
</script>

<style scoped></style>
