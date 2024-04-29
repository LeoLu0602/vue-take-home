<script setup lang="ts">
import { getData, setData } from 'nuxt-storage/local-storage';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import Setting from '../components/Setting.vue';

const route: RouteLocationNormalizedLoaded = useRoute();
const isActive: boolean = route.fullPath === '/settings';
const username: globalThis.Ref<string> = ref(
  getData('username') ? getData('username') : ''
);
const theme: globalThis.Ref<string> = ref(
  getData('theme') ? getData('theme') : 'light'
);
const favoriteTeam: globalThis.Ref<string> = ref(
  getData('favoriteTeam') ? getData('favoriteTeam') : ''
);

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

function save() {
  setData('username', username.value);
  setData('theme', theme.value);
  setData('favoriteTeam', favoriteTeam.value);
}

function forget() {
  setData('username', '');
  setData('theme', '');
  setData('favoriteTeam', '');
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
      <Setting
        type="text"
        label="Username"
        :value="username"
        v-model="username"
      />
      <Setting type="radio" :labels="['light', 'dark']" v-model="theme" />
      <Setting
        type="select"
        label="Favorite Team"
        :options="TEAMS"
        v-model="favoriteTeam"
      />
      <button class="save-btn" @click="save">Save</button>
      <button class="forget-btn" @click="forget">Forget</button>
    </main>
    <footer></footer
  ></ClientOnly>
</template>
