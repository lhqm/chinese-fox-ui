<script setup lang="ts">
import { inject, computed, Ref } from 'vue';

const props = defineProps<{
  index: string;
  disabled?: boolean;
}>();

const menuContext = inject<{
  mode: string;
  activeIndex: Ref<string>;
  handleItemClick: (index: string) => void;
}>('menuContext');

// Level injection for indentation
const level = inject<number>('menuLevel', 0);

const isActive = computed(() => menuContext?.activeIndex.value === props.index);

const handleClick = () => {
  if (!props.disabled) {
    menuContext?.handleItemClick(props.index);
  }
};

const itemStyle = computed(() => {
  if (menuContext?.mode === 'vertical') {
    return { paddingLeft: `${20 + level * 20}px` };
  }
  return {};
});
</script>

<template>
  <li 
    class="c-menu-item"
    :class="{ 
      'is-active': isActive, 
      'is-disabled': disabled,
      'is-vertical': menuContext?.mode === 'vertical'
    }"
    :style="itemStyle"
    @click="handleClick"
  >
    <div class="c-menu-item__content">
      <slot></slot>
    </div>
    
    <!-- Huali Decoration -->
    <div class="c-menu-item__decoration"></div>
  </li>
</template>

<style scoped>
.c-menu-item {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  list-style: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  color: var(--cf-color-text-secondary);
  font-size: 14px;
  white-space: nowrap;
}

.c-menu-item.is-disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.c-menu-item:not(.is-disabled):hover {
  color: var(--cf-color-primary);
  background-color: rgba(0, 0, 0, 0.02);
}

.c-menu-item.is-active {
  color: var(--cf-color-primary);
  font-weight: 500;
}

/* Vertical Mode Adjustments */
.c-menu-item.is-vertical {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid transparent;
}

/* --- Suya Theme (Ink Wash) --- */
/* Horizontal Active: Bottom Ink Stroke */
.c-menu-item:not(.is-vertical).is-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
  height: 2px;
  background-color: var(--cf-color-primary);
  transform: scaleX(1);
  transition: transform 0.3s;
}

/* Vertical Active: Left Ink Bar */
.c-menu-item.is-vertical.is-active {
  background-color: var(--cf-color-bg-secondary, #f5f5f5);
  border-right: 2px solid var(--cf-color-primary);
}

/* --- Huali Theme (Plaque / Banner) --- */
[data-theme="huali"] .c-menu-item {
  color: var(--cf-color-text);
  font-weight: bold;
}

[data-theme="huali"] .c-menu-item:not(.is-disabled):hover {
  color: var(--cf-color-primary);
  background-color: var(--cf-color-bg);
}

/* Horizontal Huali Active */
[data-theme="huali"] .c-menu-item:not(.is-vertical).is-active {
  color: var(--cf-color-primary);
  background: linear-gradient(to top, var(--cf-color-bg), transparent);
}

[data-theme="huali"] .c-menu-item:not(.is-vertical).is-active::after {
  height: 3px;
  background: var(--cf-color-primary);
  bottom: 0;
  left: 0; right: 0;
  box-shadow: 0 -2px 4px var(--cf-shadow);
}

/* Vertical Huali Active - Plaque Style */
[data-theme="huali"] .c-menu-item.is-vertical.is-active {
  background-color: var(--cf-color-primary);
  color: var(--cf-color-secondary); /* Gold Text */
  border-right: none;
  box-shadow: 2px 2px 5px var(--cf-shadow);
  transform: scale(1.02);
  z-index: 1;
  border-radius: 0 4px 4px 0;
  margin-right: -2px; /* Pull out slightly */
}

/* Gold border for vertical items */
[data-theme="huali"] .c-menu-item.is-vertical {
  border-bottom: 1px solid var(--cf-color-border);
}

/* Decoration (Cloud/Knot) */
[data-theme="huali"] .c-menu-item__decoration {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: transparent;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.3s;
}

[data-theme="huali"] .c-menu-item.is-active .c-menu-item__decoration {
  opacity: 1;
  background-color: currentColor; /* Matches text color (Gold or Red) */
  box-shadow: 0 0 4px currentColor;
}
</style>