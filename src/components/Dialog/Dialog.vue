<template>
  <div>
    <slot name="activator" @click="model = true"></slot>

    <Teleport to="#overlay">
      <DialogScrim v-if="model"></DialogScrim>
      <Transition
        appear
        enter-active-class="duration-200"
        leave-active-class="duration-200"
        :enter-from-class="fullscreen ? 'translate-y-[100%]' : 'translate-y-10'"
        :leave-to-class="fullscreen ? 'translate-y-[-100%]' : '-translate-y-10'"
      >
        <DialogContent
          v-model="model"
          v-if="model"
          :persistent="persistent"
          :fullscreen="fullscreen"
        >
          <slot></slot>
        </DialogContent>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import DialogContent from "./DialogContent.vue";
import DialogScrim from "./DialogScrim.vue";

defineProps<
  Partial<{
    persistent: boolean;
    fullscreen: boolean;
  }>
>();

const model = defineModel<boolean>({ default: false });
</script>

<style scoped></style>
