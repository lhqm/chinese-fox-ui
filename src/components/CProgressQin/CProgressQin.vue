<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: number;
  showLabel?: boolean;
  width?: string;
  height?: string;
}>();

const pct = computed(() => {
  let v = Number(props.value || 0);
  if (v < 0) v = 0;
  if (v > 100) v = 100;
  return v;
});
const w = computed(() => props.width || '100%');
const h = computed(() => props.height || '16px');
</script>

<template>
  <div class="c-progress-qin" :style="{ width: w, height: h }">
    <div class="c-progress-qin__strings"></div>
    <div class="c-progress-qin__bar" :style="{ width: pct + '%' }"></div>
    <div v-if="showLabel" class="c-progress-qin__label">{{ pct }}%</div>
  </div>
</template>

<style scoped>
.c-progress-qin {
  position: relative;
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  border-radius: 8px;
  overflow: hidden;
}
.c-progress-qin__strings {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px);
  background-size: 16px 100%;
  opacity: 0.4;
  pointer-events: none;
}
.c-progress-qin__bar {
  height: 100%;
  background: var(--cf-color-primary);
  transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.c-progress-qin__label {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  font-size: 12px;
  color: var(--cf-color-text);
}
[data-theme="suya"] .c-progress-qin__strings {
  background-image: linear-gradient(to right, rgba(74,106,116,0.15) 1px, transparent 1px);
}
[data-theme="huali"] .c-progress-qin {
  border: 1px solid var(--cf-color-primary);
  box-shadow: 0 4px 12px var(--cf-shadow);
}
[data-theme="huali"] .c-progress-qin__strings {
  background-image: linear-gradient(to right, rgba(194,62,62,0.18) 1px, transparent 1px);
}
</style>
