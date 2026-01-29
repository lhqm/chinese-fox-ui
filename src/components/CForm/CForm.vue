<script setup lang="ts">
import { provide } from 'vue';

const props = defineProps<{
  model?: Record<string, any>;
  labelWidth?: string;
  labelPosition?: 'left' | 'right' | 'top';
}>();

provide('formContext', {
  labelWidth: props.labelWidth,
  labelPosition: props.labelPosition || 'right'
});
</script>

<template>
  <form class="c-form">
    <slot></slot>
  </form>
</template>

<style scoped>
.c-form {
  width: 100%;
}
</style>
