<script setup lang="ts">
import { getData } from 'nuxt-storage/local-storage';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();
const isActive: boolean = route.fullPath === '/';
const { data: results } = await useFetch(
  'https://mocki.io/v1/1638cad5-219e-46f0-88f2-fa406078fc5b '
);
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
        <ul class="results" v-for="result in results">
          <li>
            {{ result.homeTeam }}
            {{ result.homeScore }}
            -
            {{ result.awayScore }}
            {{ result.awayTeam }}
          </li>
        </ul>
      </section>
    </main>
    <footer></footer
  ></ClientOnly>
</template>
