<template>
  <div class="grid gap-1">
    <label :for="label" class="text-sm text-slate-500">{{ label }}</label>
    <input
      v-focus:[focused]
      type="text"
      :id="label"
      class="rounded-lg border px-4 py-2 outline-none"
      v-model="model"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

defineProps<{
  label?: string;
  focused?: boolean;
}>();

const model = defineModel();
</script>

<style scoped></style>
