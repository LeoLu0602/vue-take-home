<script setup lang="ts">
import nuxtStorageLocalStorage from 'nuxt-storage/local-storage'; // works on prod only
// import nuxtStorage from 'nuxt-storage'; // works on dev only

const { getData } = nuxtStorageLocalStorage; // works on prod only
// const { getData } = nuxtStorage.localStorage; // works on dev only
const route = useRoute();
const isActive: boolean = route.fullPath === '/';
const mode = useMode();
const { data: results } = await useFetch(
  'https://mocki.io/v1/1638cad5-219e-46f0-88f2-fa406078fc5b '
);

mode.value = getData('mode') ? getData('mode') : 'light';

useHead({
  bodyAttrs: { class: mode },
});
</script>

<template>
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
    <h1>
      👋
      {{ getData('username') ? getData('username') : 'Anonymous User' }}
    </h1>
    <section>
      <ul class="results">
        <li v-for="{ homeTeam, homeScore, awayScore, awayTeam } in results">
          {{ homeTeam }}
          {{ homeScore }}
          -
          {{ awayScore }}
          {{ awayTeam }}
        </li>
      </ul>
    </section>
  </main>
  <footer></footer>
</template>
