<template>
  <aside class="flex flex-col rounded-xl bg-indigo-50 p-5">
    <nav>
      <ul class="grid gap-3">
        <li v-for="link in links">
          <Link
            :key="Link.name"
            :icon="link.icon"
            class="flex items-center gap-3"
            :to="link.to"
          >
            {{ link.name }}</Link
          >
        </li>
      </ul>
    </nav>

    <Profile
      image="https://i.pravatar.cc/300?img=50"
      name="Roy Victor"
      class="mt-auto border-t pt-2"
    />
  </aside>
</template>

<script setup lang="ts">
import Link from "./Link.vue";
import Profile from "./Profile.vue";

const links = [
  { icon: "pi pi-th-large", to: { name: "dashboard" }, name: "Dashboard" },
  { icon: "pi pi-shopping-cart", to: { name: "expenses" }, name: "Expenses" },
  { icon: "pi pi-credit-card", to: { name: "income" }, name: "Income" },
  {
    icon: "pi pi-wallet",
    to: { name: "budget" },
    name: "Budget",
  },
];
</script>

<style scoped></style>
