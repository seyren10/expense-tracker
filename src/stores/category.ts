import { ref, computed, readonly } from "vue";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categories", () => {
  const _categories = ref<string[]>(["Food", "Transportation", "Shopping"]);
  const categories = readonly(_categories);

  const addCategory = (newCategory: string) => {
    //add new category when not yet exists to the cateogies
    if (
      !_categories.value
        .map((e) => e.toLowerCase())
        .includes(newCategory.toLowerCase())
    ) {
      _categories.value.push(newCategory);
    }
  };

  const removeCategory = (category: string) => {
    const lowerCategories = _categories.value.map((e) => e.toLowerCase());
    const lowerCategory = category.toLowerCase();
    if (lowerCategories.includes(lowerCategory)) {
      _categories.value = _categories.value.filter(
        (e) => e.toLowerCase() !== lowerCategory,
      );
    }
  };

  return { categories, addCategory, removeCategory };
});
