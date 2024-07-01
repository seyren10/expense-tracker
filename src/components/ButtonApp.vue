<template>
  <button
    class="flex items-center gap-2 rounded-lg px-4 py-2 font-medium"
    :class="{
      'bg-indigo-500 text-white': variant === 'primary',
      'bg-indigo-100 text-indigo-500': variant === 'secondary',
      'bg-none text-indigo-400': variant === 'tertiary',
    }"
  >
    <slot name="prepend">
      <i :class="prependIcon" v-if="prependIcon"></i>
    </slot>
    <slot> Button </slot>
    <slot name="append">
      <i :class="appendIcon" v-if="prependIcon"></i>
    </slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<
    Partial<{
      prependIcon: string;
      appendIcon: string;
      variant: "primary" | "secondary" | "tertiary";
    }>
  >(),
  {
    variant: "primary",
  },
);
</script>

<style scoped></style>
