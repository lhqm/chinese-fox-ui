<script setup lang="ts">
import { inject, ref, computed, provide } from 'vue';

const props = defineProps<{
  title: string;
  index?: string;
}>();

const menuContext = inject<{
  mode: string;
}>('menuContext');

// Level injection
const level = inject<number>('menuLevel', 0);
// Provide next level
provide('menuLevel', level + 1);

const isOpen = ref(true); // Default open for sidebar documentation

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const titleStyle = computed(() => {
  if (menuContext?.mode === 'vertical') {
    return { paddingLeft: `${20 + level * 20}px` };
  }
  return { padding: '0 20px' };
});
</script>

<template>
  <li 
    class="c-submenu"
    :class="[
      `c-submenu--${menuContext?.mode || 'horizontal'}`,
      { 'is-opened': isOpen }
    ]"
  >
    <div 
      class="c-submenu__title" 
      :style="titleStyle"
      @click="toggleOpen"
    >
      <span>{{ title }}</span>
      <span class="c-submenu__icon-arrow">
        <svg viewBox="0 0 1024 1024" width="12" height="12">
          <path d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"></path>
        </svg>
      </span>
    </div>
    <ul v-show="isOpen" class="c-submenu__list">
      <slot></slot>
    </ul>
  </li>
</template>

<style scoped>
.c-submenu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.c-submenu__title {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  color: var(--cf-color-text);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-submenu__title:hover {
  color: var(--cf-color-primary);
  background-color: rgba(0, 0, 0, 0.02);
}

.c-submenu__icon-arrow {
  transition: transform 0.3s;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
}

.c-submenu.is-opened > .c-submenu__title .c-submenu__icon-arrow {
  transform: rotate(180deg);
}

.c-submenu__list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

/* Vertical Mode Adjustments */
.c-submenu--vertical .c-submenu__title {
  height: 50px;
  line-height: 50px;
}

/* Huali Theme */
[data-theme="huali"] .c-submenu__title {
  color: var(--cf-color-text);
  border-bottom: 1px solid var(--cf-color-border);
  background-color: rgba(255, 255, 255, 0.3);
}

[data-theme="huali"] .c-submenu__title:hover {
  color: var(--cf-color-primary);
  background-color: var(--cf-color-bg);
}

[data-theme="huali"] .c-submenu__list {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>