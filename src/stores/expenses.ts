import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Expense } from "@/types/expense";

export const useExpensesStore = defineStore("expenses", () => {
  const expenses = ref<Expense[]>([]);
});
