<template>
  <div class="absolute inset-0 grid place-content-center" v-if="!fullscreen">
    <div
      class="relative inset-0 rounded-xl bg-white p-5 shadow-sm"
      ref="container"
    >
      <slot> Dialog Content </slot>
    </div>
  </div>

  <div class="absolute inset-0 bg-white" ref="container" v-else>
    <slot> Dialog Content </slot>
  </div>
</template>

<script setup lang="ts">
import { useClickOutside } from "@/composables/useClickOutside";
import { useDisableScrolling } from "@/composables/useDisableScrolling";
import { useKey } from "@/composables/useKey";
import { ref } from "vue";

const props = defineProps<
  Partial<{
    persistent: boolean;
    fullscreen: boolean;
  }>
>();

const model = defineModel({ default: false });
const container = ref<HTMLElement | null>(null);

useDisableScrolling();

if (!props.persistent) {
  useKey("Escape", () => {
    model.value = false;
  });
  useClickOutside(container, () => (model.value = false));
}
</script>

<style scoped></style>
