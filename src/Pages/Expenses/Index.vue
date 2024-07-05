<template>
  <main class="space-y-10">
    <h2 class="text-slate-500">Expenses</h2>
    <section class="ml-2">
      <h1 class="text-[1.2rem] font-bold">Categories</h1>

      <CategoryList
        :categories="categories"
        class="mt-3 flex flex-wrap items-center gap-3 text-sm"
      ></CategoryList>
    </section>

    <section class="ml-2">
      <h1 class="text-[1.2rem] font-bold">Expenses</h1>

      <button-app @click="dialog = true" prepend-icon="pi pi-plus text-xs"
        >Add expense</button-app
      >

      <Dialog v-model="dialog" persistent>
        <ExpenseForm @close="dialog = false"></ExpenseForm>
      </Dialog>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useCategoryStore } from "@/stores/category";
import { storeToRefs } from "pinia";

import CategoryList from "./components/CategoryList.vue";
import ExpenseForm from "./components/ExpenseForm.vue";
import Dialog from "@/components/Dialog/Dialog.vue";

const { categories } = storeToRefs(useCategoryStore());

const dialog = defineModel({ default: false });
</script>

<style scoped></style>
