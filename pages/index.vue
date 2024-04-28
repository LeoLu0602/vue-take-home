<script setup lang="ts">
const users = await useFetch(
  'https://mocki.io/v1/fdb05063-4e7d-4db0-a7d6-a0e30eebd942'
);
</script>

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/settings">Settings</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      Home Page
      <section>{{ users }}</section>
    </main>
    <footer></footer>
  </div>
</template>
