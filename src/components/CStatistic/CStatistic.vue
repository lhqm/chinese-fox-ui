<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
  title?: string;
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}>();

const display = ref(0);
onMounted(() => {
  const start = 0;
  const end = props.value;
  const d = props.duration ?? 800;
  const t0 = performance.now();
  const step = (t: number) => {
    const p = Math.min((t - t0) / d, 1);
    display.value = Math.round(start + (end - start) * p);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
});
</script>

<template>
  <div class="c-statistic">
    <div class="c-statistic__title">{{ props.title }}</div>
    <div class="c-statistic__value">
      <span v-if="props.prefix" class="c-statistic__prefix">{{ props.prefix }}</span>
      <span class="c-statistic__num">{{ display }}</span>
      <span v-if="props.suffix" class="c-statistic__suffix">{{ props.suffix }}</span>
    </div>
  </div>
</template>

<style scoped>
.c-statistic {
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
  border: 1px solid var(--cf-color-border);
  border-radius: 8px;
  background: var(--cf-color-surface);
}
.c-statistic__title {
  font-size: 12px;
  color: var(--cf-color-text-secondary);
}
.c-statistic__value {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
}
.c-statistic__num {
  font-size: 24px;
  font-weight: 700;
  color: var(--cf-color-text);
}
[data-theme="huali"] .c-statistic {
  border-color: var(--cf-color-primary);
}
[data-theme="huali"] .c-statistic__num {
  color: var(--cf-color-primary);
}
</style>
