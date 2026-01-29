<script setup lang="ts">
import { inject } from 'vue';

const props = defineProps<{
  to?: string | object;
  replace?: boolean;
}>();

const separator = inject<string>('breadcrumbSeparator', '/');
</script>

<template>
  <span class="c-breadcrumb__item">
    <span 
      class="c-breadcrumb__inner" 
      :class="{ 'is-link': to }"
    >
      <slot></slot>
    </span>
    <span class="c-breadcrumb__separator">{{ separator }}</span>
  </span>
</template>

<style scoped>
.c-breadcrumb__item {
  display: flex;
  align-items: center;
}

.c-breadcrumb__item:last-child .c-breadcrumb__separator {
  display: none;
}

.c-breadcrumb__inner {
  color: var(--cf-color-text-secondary);
  transition: color 0.3s;
}

.c-breadcrumb__inner.is-link {
  font-weight: 700;
  text-decoration: none;
  color: var(--cf-color-text);
  cursor: pointer;
}

.c-breadcrumb__inner.is-link:hover {
  color: var(--cf-color-primary);
}

.c-breadcrumb__separator {
  margin: 0 9px;
  font-weight: 700;
  color: var(--cf-color-text-secondary);
}

/* Huali Theme */
[data-theme="huali"] .c-breadcrumb__inner.is-link {
  color: var(--cf-color-primary);
}

[data-theme="huali"] .c-breadcrumb__separator {
  color: var(--cf-color-secondary);
}
</style>
