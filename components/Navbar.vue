<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <nav>
    <ul>
      <li :class="{ active: route.fullPath === '/' }">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li :class="{ active: route.fullPath === '/settings' }">
        <NuxtLink to="/settings">Settings</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
