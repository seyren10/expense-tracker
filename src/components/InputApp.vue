<template>
  <div class="grid">
    <label :for="label" class="mb-1 text-sm text-slate-500">{{ label }}</label>
    <input
      v-focus:[focused]
      type="text"
      :id="label"
      class="rounded-lg border px-4 py-2 outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
      v-model="model"
      v-bind="$attrs"
      @blur="validate()"
    />
    <div class="ml-1 min-h-5 text-xs text-red-500">
      <span v-if="!isValid">
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useValidate, type ValidationType } from "@/composables/useValidate";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    label?: string;
    focused?: boolean;
    rules?: ValidationType[];
    errorMessage?: string;
  }>(),
  {
    errorMessage: "Invalid Input",
  },
);

const model = defineModel({ default: "" });

const { isValid, validate } = useValidate(model, props.rules);
</script>

<style scoped></style>
