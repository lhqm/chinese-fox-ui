<script setup lang="ts">
import { provide, ref, watch, useSlots, VNode, Component } from 'vue';

const props = defineProps<{
  modelValue?: string | number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'tab-click', pane: { name: string | number, label: string }): void;
}>();

const currentName = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  currentName.value = val;
});

const handleTabClick = (name: string | number, label: string) => {
  currentName.value = name;
  emit('update:modelValue', name);
  emit('tab-click', { name, label });
};

provide('tabsContext', {
  currentName
});

// Helper to get panes from slot
const slots = useSlots();
const getPanes = () => {
  if (!slots.default) return [];
  const children = slots.default();
  return children.filter((child) => {
    return (child.type as Component).name === 'CTabPane' || (child.type as any).__name === 'CTabPane';
  });
};
</script>

<template>
  <div class="c-tabs">
    <div class="c-tabs__header">
      <div class="c-tabs__nav-wrap">
        <div class="c-tabs__nav">
          <div 
            v-for="(pane, index) in getPanes()" 
            :key="index"
            class="c-tabs__item"
            :class="{ 'is-active': pane.props?.name === currentName }"
            @click="handleTabClick(pane.props?.name, pane.props?.label)"
          >
            {{ pane.props?.label }}
          </div>
        </div>
      </div>
    </div>
    <div class="c-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.c-tabs {
  width: 100%;
}

.c-tabs__header {
  position: relative;
  margin-bottom: 15px;
  border-bottom: 2px solid var(--cf-color-border);
}

.c-tabs__nav {
  display: flex;
  position: relative;
}

.c-tabs__item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--cf-color-text);
  position: relative;
  cursor: pointer;
  transition: color 0.3s;
}

.c-tabs__item:hover {
  color: var(--cf-color-primary);
}

.c-tabs__item.is-active {
  color: var(--cf-color-primary);
  font-weight: bold;
}

/* Suya Theme - Ink Stroke */
[data-theme="suya"] .c-tabs__item.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: var(--cf-color-primary);
  z-index: 1;
}

/* Huali Theme - Traditional Style */
[data-theme="huali"] .c-tabs__header {
  border-bottom: 1px solid var(--cf-color-primary);
}

[data-theme="huali"] .c-tabs__item {
  border: 1px solid transparent;
  border-bottom: none;
  margin-right: 4px;
  border-radius: 4px 4px 0 0;
}

[data-theme="huali"] .c-tabs__item.is-active {
  background-color: var(--cf-color-primary);
  color: var(--cf-color-secondary);
  border-color: var(--cf-color-primary);
}

[data-theme="huali"] .c-tabs__item:not(.is-active):hover {
  color: var(--cf-color-primary);
  background-color: rgba(194, 62, 62, 0.05);
}
</style>