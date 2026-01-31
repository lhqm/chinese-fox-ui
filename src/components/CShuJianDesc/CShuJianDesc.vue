<script setup lang="ts">
const props = defineProps<{
  items: Array<{ label: string; value: string }>;
  column?: number;
}>();
</script>

<template>
  <div class="c-shujian-desc" :style="{ gridTemplateColumns: `repeat(${props.column ?? 2}, 1fr)` }">
    <div v-for="(it, idx) in props.items" :key="idx" class="c-shujian-desc__item">
      <div class="c-shujian-desc__label">{{ it.label }}</div>
      <div class="c-shujian-desc__value">{{ it.value }}</div>
    </div>
  </div>
</template>

<style scoped>
.c-shujian-desc {
  display: grid;
  gap: 12px;
  background: var(--cf-color-surface);
  border: 1px dashed var(--cf-color-border);
  padding: 16px;
  border-radius: 8px;
}
.c-shujian-desc__item {
  position: relative;
  background: linear-gradient(180deg, rgba(0,0,0,0.02), transparent);
  border-radius: 6px;
  padding: 10px;
}
.c-shujian-desc__label {
  font-size: 12px;
  color: var(--cf-color-text-secondary);
  margin-bottom: 6px;
}
.c-shujian-desc__value {
  color: var(--cf-color-text);
  font-weight: 600;
}
[data-theme="huali"] .c-shujian-desc {
  border: 1px solid var(--cf-color-primary);
  background: #fff7f2;
}
[data-theme="huali"] .c-shujian-desc__item {
  background: linear-gradient(180deg, #ffe9d9, transparent);
}
</style>
