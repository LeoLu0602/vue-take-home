<script setup lang="ts">
import { getData } from 'nuxt-storage/local-storage';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();
const isActive: boolean = route.fullPath === '/';
// const { data: users } = await useFetch(
//   'https://mocki.io/v1/fdb05063-4e7d-4db0-a7d6-a0e30eebd942'
// );
</script>

<template>
  <ClientOnly>
    <header>
      <nav>
        <ul>
          <li :class="{ active: isActive }">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li><NuxtLink to="/settings">Settings</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h1>
          👋 {{ getData('username') ? getData('username') : 'Anonymous User' }}
        </h1>
      </section>
    </main>
    <footer></footer
  ></ClientOnly>
</template>
