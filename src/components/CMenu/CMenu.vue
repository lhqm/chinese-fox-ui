<script setup lang="ts">
import { provide, ref, watch } from 'vue';

const props = defineProps<{
  mode?: 'horizontal' | 'vertical';
  defaultActive?: string;
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
}>();

const emit = defineEmits<{
  (e: 'select', index: string): void;
}>();

const activeIndex = ref(props.defaultActive || '');

watch(() => props.defaultActive, (val) => {
  activeIndex.value = val || '';
});

const handleItemClick = (index: string) => {
  activeIndex.value = index;
  emit('select', index);
};

provide('menuContext', {
  mode: props.mode || 'horizontal',
  activeIndex,
  handleItemClick
});
</script>

<template>
  <ul 
    class="c-menu"
    :class="[`c-menu--${mode || 'horizontal'}`]"
    :style="{ backgroundColor: backgroundColor }"
  >
    <slot></slot>
  </ul>
</template>

<style scoped>
.c-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: var(--cf-color-bg);
  border-bottom: 1px solid var(--cf-color-border);
  box-sizing: border-box;
  display: flex;
  transition: all 0.3s;
}

.c-menu--horizontal {
  flex-direction: row;
  height: 60px;
  align-items: center;
}

.c-menu--vertical {
  flex-direction: column;
  border-right: 1px solid var(--cf-color-border);
  border-bottom: none;
  width: 240px;
}

/* --- Suya Theme (Ink) --- */
/* Horizontal: Minimalist */
.c-menu--horizontal {
  /* box-shadow: 0 1px 2px rgba(0,0,0,0.05); */
}

/* --- Huali Theme (Ornate) --- */
[data-theme="huali"] .c-menu {
  background-color: #FCFAF2;
  border-color: var(--cf-color-primary);
}

[data-theme="huali"] .c-menu--horizontal {
  border-bottom: 2px solid var(--cf-color-primary);
  background-image: var(--cf-bg-pattern-secondary);
}

[data-theme="huali"] .c-menu--vertical {
  border-right: 2px solid var(--cf-color-primary);
  background-image: var(--cf-bg-pattern-secondary);
}
</style>
