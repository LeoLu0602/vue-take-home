<script setup lang="ts">
import nuxtStorageLocalStorage from 'nuxt-storage/local-storage'; // works on prod only (somehow)
// import nuxtStorage from 'nuxt-storage'; // works on dev only (somehow)
import Setting from '../components/Setting.vue';

const { getData, setData } = nuxtStorageLocalStorage; // works on prod only (somehow)
// const { getData, setData } = nuxtStorage.localStorage; // works on dev only (somehow)
const route = useRoute();
const isActive: boolean = route.fullPath === '/settings';
const mode = useMode();
const username = ref(getData('username'));
const favoriteTeam = ref(getData('favoriteTeam'));
const TEAMS: string[] = [
  '',
  'Arsenal',
  'Aston Villa',
  'Bournemouth',
  'Brentford',
  'Brighton',
  'Burnley',
  'Chelsea',
  'Crystal Palace',
  'Everton',
  'Fulham',
  'Liverpool',
  'Luton Town',
  'Man City',
  'Man Utd',
  'Newcastle',
  'Nottingham Forrest',
  'Sheffield Utd',
  'Tottenham',
  'West Ham United',
  'Wolves',
];

useHead({
  bodyAttrs: { class: mode },
});

function save() {
  setData('username', username.value, 365, 'd');
  setData('mode', mode.value, 365, 'd');
  setData('favoriteTeam', favoriteTeam.value, 365, 'd');
}
</script>

<template>
  <ClientOnly>
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
    <main>
      <h1>Settings</h1>
      <section>
        <Setting
          type="text"
          :labels="['username']"
          :value="username"
          v-model="username"
        />
        <Setting type="radio" :labels="['light', 'dark']" v-model="mode" />
        <Setting
          type="select"
          :labels="['favorite team']"
          :options="TEAMS"
          v-model="favoriteTeam"
        />
        <button class="save-btn" @click="save">Save</button>
      </section>
    </main>
    <footer></footer
  ></ClientOnly>
</template>
