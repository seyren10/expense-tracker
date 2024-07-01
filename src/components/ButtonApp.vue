<template>
  <button
    class="flex items-center gap-2 rounded-lg px-4 py-2 font-medium"
    :class="`${!secondary ? 'bg-indigo-500 text-white' : 'bg-indigo-100 text-indigo-500'}`"
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
defineProps<
  Partial<{
    prependIcon: string;
    appendIcon: string;
    secondary: boolean;
  }>
>();
</script>

<style scoped></style>
