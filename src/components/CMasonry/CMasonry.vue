<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  columns?: number;
  gap?: number;
}>();

const styleVars = computed(() => ({
  '--masonry-columns': String(props.columns ?? 3),
  '--masonry-gap': `${props.gap ?? 16}px`,
}));
</script>

<template>
  <div class="c-masonry" :style="styleVars">
    <slot></slot>
  </div>
</template>

<style scoped>
.c-masonry {
  column-count: var(--masonry-columns);
  column-gap: var(--masonry-gap);
}
.c-masonry ::v-deep(.c-masonry__item) {
  break-inside: avoid;
  margin-bottom: var(--masonry-gap);
}

[data-theme="huali"] .c-masonry {
  column-gap: calc(var(--masonry-gap) + 4px);
}

/* Breakpoints for responsive columns */
@media (max-width: 767px) {
  .c-masonry {
    column-count: 1;
  }
}
@media (min-width: 768px) and (max-width: 1199px) {
  .c-masonry {
    column-count: 2;
  }
}
@media (min-width: 1200px) {
  .c-masonry {
    column-count: var(--masonry-columns);
  }
}
</style>
