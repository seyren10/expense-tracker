<template>
  <div>
    <h2 class="mb-3 font-medium">Add new expense</h2>
    <form-app
      class="grid items-start gap-x-3 md:grid-cols-2"
      @submit.prevent="handleFormSubmit"
    >
      <template #default="{ isFormValid }">
        <input-app
          label="Title"
          v-model="expenseForm.title"
          :rules="['required']"
          error-message="Input must not be empty"
        ></input-app>

        <div class="grid gap-1">
          <label for="category" class="text-sm text-slate-500">Category</label>
          <select
            id="category"
            class="rounded-lg border px-4 py-2 outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
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
          error-message="Input must be greater than 0"
          v-model="expenseForm.amount"
        ></input-app>

        <input-app
          label="Date"
          type="date"
          :rules="['date']"
          v-model="expenseForm.date"
        ></input-app>

        <div class="ml-auto inline-flex md:col-span-2">
          <button-app :disabled="!isFormValid">Save </button-app>
          <button-app variant="tertiary" type="button" @click="$emit('close')"
            >Cancel</button-app
          >
        </div>
      </template>
    </form-app>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from "@/stores/category";
import { storeToRefs } from "pinia";
import { useExpensesStore } from "@/stores/expenses";

const emits = defineEmits<{
  (e: "close"): void;
}>();

const { categories } = storeToRefs(useCategoryStore());
const expenseStore = useExpensesStore();
const { form: expenseForm } = storeToRefs(expenseStore);

const handleFormSubmit = () => {
  expenseStore.addExpense(expenseForm.value);
  expenseStore.resetForm();
};
</script>

<style scoped></style>
