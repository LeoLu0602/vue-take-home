<script setup lang="ts">
import { setData } from 'nuxt-storage/local-storage';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const username: globalThis.Ref<string> = ref('');
const route: RouteLocationNormalizedLoaded = useRoute();
const isActive: boolean = route.fullPath === '/settings';

function handleUsername(event) {
  username.value = event.target.value;
}

function save() {
  setData('username', username.value);
}

function forget() {
  setData('username', '');
}
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
  <main>
    <h1>Settings</h1>
    <section>
      <section class="setting">
        <label for="username">Username</label>
        <input
          name="username"
          type="text"
          :value="username"
          placeholder="Username"
          @input="handleUsername"
        />
      </section>
      <button class="save-btn" @click="save">Save</button>
      <button class="forget-btn" @click="forget">Forget</button>
    </section>
  </main>
  <footer></footer>
</template>
