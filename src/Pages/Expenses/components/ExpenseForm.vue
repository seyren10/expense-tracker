<template>
  <div>
    <slot name="activator" @click="showForm = true" v-if="!showForm">
      <button-app prepend-icon="pi pi-plus text-xs" @click="showForm = true"
        >Add expense</button-app
      >
    </slot>
    <form
      v-if="showForm"
      class="grid max-w-[40rem] items-start gap-3 md:grid-cols-2"
    >
      <input-app
        label="Title"
        focused
        v-model="expenseForm.title"
        :rules="['required']"
        error-message="field must not be empty"
      ></input-app>

      <div class="grid gap-1">
        <label for="category" class="text-sm text-slate-500">Category</label>
        <select
          id="category"
          class="rounded-lg border px-4 py-2 outline-none"
          v-model="expenseForm.category"
        >
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <div class="min-h-5 text-xs text-red-500"></div>
      </div>

      <input-app
        label="Amount"
        type="number"
        :rules="['required', 'min:1']"
        error-message="Cannot be zero"
        v-model="expenseForm.amount"
      ></input-app>

      <input-app
        label="Date"
        type="date"
        v-model="expenseForm.date"
      ></input-app>

      <div class="ml-auto inline-flex md:col-span-2">
        <button-app>Save</button-app>
        <button-app variant="tertiary" type="button" @click="showForm = false"
          >Cancel</button-app
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCategoryStore } from "@/stores/category";
import { storeToRefs } from "pinia";
import { useExpensesStore } from "@/stores/expenses";

const showForm = ref(false);

const { categories } = storeToRefs(useCategoryStore());
const { form: expenseForm } = storeToRefs(useExpensesStore());
</script>

<style scoped></style>
