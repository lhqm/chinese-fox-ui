<script setup lang="ts">
import { provide } from 'vue';

const props = defineProps<{
  separator?: string;
  separatorIcon?: string;
}>();

provide('breadcrumbSeparator', props.separator || '/');
</script>

<template>
  <div class="c-breadcrumb">
    <slot></slot>
  </div>
</template>

<style scoped>
.c-breadcrumb {
  font-size: 14px;
  line-height: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
