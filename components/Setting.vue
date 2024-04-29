<script setup lang="ts">
import type { ModelRef } from 'vue';

defineProps(['type', 'label', 'labels', 'value', 'options']);

const model: ModelRef<unknown, string> = defineModel();
</script>

<template>
  <section class="setting" v-if="type === 'text'">
    <label v-bind:for="label">{{ label }}</label>
    <input
      v-bind:id="label"
      v-bind:type="type"
      v-bind:value="value"
      v-model="model"
    />
  </section>

  <section class="setting" v-if="type === 'radio'">
    <div v-for="label in labels" class="radio-option">
      <label v-bind:for="label">{{
        label[0].toUpperCase() + label.slice(1)
      }}</label>
      <input
        v-bind:id="label"
        v-bind:type="type"
        v-bind:value="label"
        v-model="model"
      />
    </div>
  </section>

  <section class="setting" v-if="type === 'select'">
    <label>{{ label }}</label>
    <select v-model="model">
      <option v-for="option in options" v-bind:value="option">
        {{ option }}
      </option>
    </select>
  </section>
</template>
