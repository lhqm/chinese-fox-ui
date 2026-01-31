<script setup lang="ts">
const props = defineProps<{
  rows?: number;
  animated?: boolean;
  avatar?: boolean;
  width?: string | number;
  height?: string | number;
}>();
</script>

<template>
  <div class="c-skeleton" :class="{ 'is-animated': props.animated !== false }" :style="{ width: props.width as any, height: props.height as any }">
    <div v-if="props.avatar" class="c-skeleton__avatar"></div>
    <div class="c-skeleton__lines">
      <div v-for="n in (props.rows ?? 3)" :key="n" class="c-skeleton__line" :style="{ width: n === (props.rows ?? 3) ? '60%' : '100%' }"></div>
    </div>
  </div>
</template>

<style scoped>
.c-skeleton {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.c-skeleton__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(90deg, var(--cf-color-surface) 25%, var(--cf-color-border) 37%, var(--cf-color-surface) 63%);
  background-size: 400% 100%;
}
.c-skeleton__lines {
  flex: 1;
}
.c-skeleton__line {
  height: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  background: linear-gradient(90deg, var(--cf-color-surface) 25%, var(--cf-color-border) 37%, var(--cf-color-surface) 63%);
  background-size: 400% 100%;
}
.c-skeleton.is-animated .c-skeleton__line,
.c-skeleton.is-animated .c-skeleton__avatar {
  animation: skeleton-shimmer 1200ms ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}

[data-theme="huali"] .c-skeleton__line,
[data-theme="huali"] .c-skeleton__avatar {
  background: linear-gradient(90deg, #fff3f3 25%, #ffd1d1 37%, #fff3f3 63%);
  background-size: 400% 100%;
}
</style>
