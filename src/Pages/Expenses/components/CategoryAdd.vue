<template>
  <div>
    <input
      type="text"
      class="mx-4 bg-transparent outline-none"
      ref="el"
      v-model="input"
      v-if="isAdding"
      @input="handleValidity"
      @keydown.enter="handleAdd"
    />
    <i
      :class="`pi ${getStateIcon} px-4 py-2 text-xs font-bold text-slate-500`"
      @click="handleAdd"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { useCategoryStore } from "@/stores/category";

enum State {
  ADDING,
  EDITING,
  SAVING,
}

const el = ref<HTMLInputElement | null>(null);

const state = ref<State>(State.ADDING);
const input = ref("");
const isAdding = ref(false);
const categoryStore = useCategoryStore();

//computed
const getStateIcon = computed(() => {
  switch (state.value) {
    case State.ADDING:
      return "pi pi-plus";
    case State.EDITING:
      return "pi pi-times";
    case State.SAVING:
      return "pi pi-check";
  }
});

//methods
const handleAdd = () => {
  switch (state.value) {
    case State.ADDING: {
      isAdding.value = true;

      nextTick(() => {
        if (el.value) el.value.focus();
      });

      state.value = State.EDITING;
      break;
    }
    case State.EDITING: {
      isAdding.value = false;
      state.value = State.ADDING;
      break;
    }
    case State.SAVING: {
      categoryStore.addCategory(input.value);
      resetInput();
      state.value = State.ADDING;
      break;
    }
    default:
      break;
  }
};

const handleValidity = () => {
  if (input.value.trim() !== "") {
    state.value = State.SAVING;
  } else state.value = State.EDITING;
};

const resetInput = () => {
  isAdding.value = false;
  input.value = "";
};
</script>

<style scoped></style>
