import { ref, readonly } from "vue";
import { defineStore, storeToRefs } from "pinia";
import type { Expense } from "@/types/expense";
import { useCategoryStore } from "./category";

export const useExpensesStore = defineStore("expenses", () => {
  const _expenses = ref<Expense[]>([]);
  const expenses = readonly(_expenses);
  const { categories } = storeToRefs(useCategoryStore());

  const form = ref<Expense>({
    amount: 0,
    category: categories.value[0] ?? "",
    date: new Date().toISOString().split("T")[0],
    title: "",
  });

  const addExpense = (expense: Expense) => {
    _expenses.value.push(expense);
  };

  const resetForm = () => {
    form.value = {
      amount: 0,
      category: categories.value[0] ?? "",
      date: new Date().toISOString().split("T")[0],
      title: "",
    };
  };

  return { expenses, form, addExpense, resetForm };
});
