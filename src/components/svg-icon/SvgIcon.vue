<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconName = computed(() => `#icon-${props.name}`);
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style>
.svg-icon {
  width: 1.5em;
  height: 1.5em;
}
</style>
