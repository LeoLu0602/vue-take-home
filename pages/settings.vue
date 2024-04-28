<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();
const isActive: boolean = route.fullPath === '/settings';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li :class="{ active: isActive }">
          <NuxtLink to="/">Settings</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>Settings Page</main>
  <footer></footer>
</template>
