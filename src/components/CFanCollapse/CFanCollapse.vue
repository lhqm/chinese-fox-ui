<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  items: Array<{ title: string; content: string }>;
}>();

const openIndex = ref<number | null>(null);
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i;
};
</script>

<template>
  <div class="c-fan-collapse">
    <div 
      class="c-fan-collapse__item" 
      v-for="(it, i) in items" 
      :key="i"
      :class="{ 'is-open': openIndex === i }"
    >
      <button class="c-fan-collapse__header" @click="toggle(i)">
        <span class="c-fan-collapse__title">{{ it.title }}</span>
        <span class="c-fan-collapse__arrow">›</span>
      </button>
      <div class="c-fan-collapse__content" v-show="openIndex === i">
        <div class="c-fan-collapse__inner">{{ it.content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-fan-collapse {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.c-fan-collapse__item {
  width: 220px;
}
.c-fan-collapse__header {
  width: 100%;
  height: 40px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;
  transform-origin: left bottom;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.c-fan-collapse__item .c-fan-collapse__header:hover {
  transform: rotate(-2deg);
  box-shadow: var(--cf-shadow);
}
.c-fan-collapse__title {
  font-weight: 600;
  color: var(--cf-color-text);
}
.c-fan-collapse__arrow {
  color: var(--cf-color-text-secondary);
  transition: transform 0.25s ease;
}
.c-fan-collapse__item.is-open .c-fan-collapse__arrow {
  transform: rotate(90deg);
}
.c-fan-collapse__content {
  border: 1px solid var(--cf-color-border);
  border-top: none;
  border-radius: 0 0 8px 8px;
  background: var(--cf-color-surface);
}
.c-fan-collapse__inner {
  padding: 12px;
}
[data-theme="suya"] .c-fan-collapse__header {
  backdrop-filter: blur(4px);
  border: 1px dashed rgba(0,0,0,0.1);
}
[data-theme="huali"] .c-fan-collapse__header {
  border: 1px solid var(--cf-color-primary);
  box-shadow: 0 4px 12px var(--cf-shadow);
}
</style>
