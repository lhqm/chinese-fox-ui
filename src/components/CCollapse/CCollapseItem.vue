<script setup lang="ts">
import { inject, computed, ref, Ref } from 'vue';

const props = defineProps<{
  name: string;
  title?: string;
  disabled?: boolean;
}>();

const collapseContext = inject<{
  activeNames: Ref<string[]>;
  handleItemClick: (name: string) => void;
}>('collapseContext');

const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name);
});

const handleHeaderClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.name);
};
</script>

<template>
  <div 
    class="c-collapse-item"
    :class="{ 
      'c-collapse-item--active': isActive,
      'c-collapse-item--disabled': disabled 
    }"
  >
    <div 
      class="c-collapse-item__header"
      @click="handleHeaderClick"
    >
      <slot name="title">{{ title }}</slot>
      <span class="c-collapse-item__arrow" :class="{ 'is-active': isActive }">
        >
      </span>
    </div>
    
    <div 
      class="c-collapse-item__wrap"
      :class="{ 'is-active': isActive }"
    >
      <div class="c-collapse-item__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-collapse-item {
  border-bottom: 1px solid var(--cf-color-border);
}

.c-collapse-item:last-child {
  border-bottom: none;
}

.c-collapse-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  background-color: var(--cf-color-bg);
  color: var(--cf-color-text);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
  padding: 0 16px;
}

.c-collapse-item__arrow {
  margin-left: 8px;
  transition: transform 0.3s;
  font-family: monospace;
}

.c-collapse-item__arrow.is-active {
  transform: rotate(90deg);
}

.c-collapse-item__wrap {
  will-change: height;
  background-color: var(--cf-color-bg);
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  max-height: 0;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0;
}

.c-collapse-item__wrap.is-active {
  max-height: 500px; /* Approximate max height */
  opacity: 1;
  border-bottom-color: var(--cf-color-border);
}

.c-collapse-item__content {
  padding: 16px;
  font-size: 13px;
  color: var(--cf-color-text-secondary);
  line-height: 1.6;
}

/* --- Suya Theme (Bamboo Slip) --- */
.c-collapse-item__header:hover {
  color: var(--cf-color-primary);
}

/* --- Huali Theme (Imperial Decree / Scroll) --- */
[data-theme="huali"] .c-collapse-item {
  border: 1px solid #E60012;
  margin-bottom: 8px;
  border-radius: 4px;
  background: #FCFAF2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

[data-theme="huali"] .c-collapse-item__header {
  background: linear-gradient(to right, #FFF8E7, #fff);
  color: #B3000E;
  font-weight: bold;
  border-bottom: 1px solid transparent;
}

[data-theme="huali"] .c-collapse-item--active .c-collapse-item__header {
  border-bottom: 1px solid #FFD700;
  background: #FFF8E7;
}

[data-theme="huali"] .c-collapse-item__content {
  background-color: #fff;
  color: #555;
  background-image: var(--cf-bg-pattern-secondary); /* Subtle texture if available */
}

/* Huali Arrow - maybe a small icon */
[data-theme="huali"] .c-collapse-item__arrow {
  color: #E60012;
  font-weight: bold;
}
</style>