<script setup lang="ts">
import { computed } from 'vue';

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
    <label :for="labels[0]">{{ capitalizedLabels[0] }}</label>
    <input
      :id="labels[0]"
      :type="type"
      :value="value"
      v-model="model"
    />
  </section>

  <section class="setting" v-if="type === 'radio'">
    <div v-for="(label, index) in labels" class="radio-option">
      <label :for="label">{{ capitalizedLabels[index] }}</label>
      <input
        :id="label"
        :type="type"
        :value="label"
        v-model="model"
      />
    </div>
  </section>

  <section class="setting" v-if="type === 'select'">
    <label :for="labels[0]">{{ capitalizedLabels[0] }}</label>
    <select :id="labels[0]" v-model="model">
      <option v-for="option in options" :value="option">
        {{ option }}
      </option>
    </select>
  </section>
</template>
