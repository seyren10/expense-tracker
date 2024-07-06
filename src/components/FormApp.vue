<template>
  <form>
    <slot :isFormValid="isFormValid"></slot>
  </form>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { inputState, type FormInputStates } from "@/types/form";

const inputStateCollection = ref<FormInputStates>({});

const isFormValid = computed(() => {
  if (!Object.keys(inputStateCollection.value).length) return false;

  return Object.keys(inputStateCollection.value).every((key) => {
    return inputStateCollection.value[key].isValid;
  });
});

provide(inputState, inputStateCollection);
</script>

<style scoped></style>
