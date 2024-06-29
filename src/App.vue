<script setup lang="ts">
import { RouterView } from "vue-router";
import SideNavigation from "@/components/SideNavigation/SideNavigation.vue";
</script>

<template>
  <div class="grid min-h-screen grid-cols-[min-content,1fr] gap-5 py-10">
    <SideNavigation></SideNavigation>
    <RouterView />
  </div>
</template>

<style scoped></style>
