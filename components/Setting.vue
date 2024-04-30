<script setup lang="ts">
import { computed, type ModelRef } from 'vue';

const props = defineProps(['type', 'labels', 'value', 'options']);
const model = defineModel();
const capitalizedLabels = computed(() =>
  props.labels.map((label: string): string => {
    return label
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  })
);
</script>

<template>
  <section class="setting" v-if="type === 'text'">
    <label v-bind:for="labels[0]">{{ capitalizedLabels[0] }}</label>
    <input
      v-bind:id="labels[0]"
      v-bind:type="type"
      v-bind:value="value"
      v-model="model"
    />
  </section>

  <section class="setting" v-if="type === 'radio'">
    <div v-for="(label, index) in labels" class="radio-option">
      <label v-bind:for="label">{{ capitalizedLabels[index] }}</label>
      <input
        v-bind:id="label"
        v-bind:type="type"
        v-bind:value="label"
        v-model="model"
      />
    </div>
  </section>

  <section class="setting" v-if="type === 'select'">
    <label v-bind:for="labels[0]">{{ capitalizedLabels[0] }}</label>
    <select v-bind:id="labels[0]" v-model="model">
      <option v-for="option in options" v-bind:value="option">
        {{ option }}
      </option>
    </select>
  </section>
</template>
