<script setup lang="ts">
defineProps(['shown']);
</script>

<template>
  <div class="saved" :class="{ hide: !shown }">✅ Saved!</div>
</template>
