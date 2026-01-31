<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps<{
  target?: string;
  visibilityHeight?: number;
  right?: number;
  bottom?: number;
  text?: string;
}>();

const visible = ref(false);
let el: HTMLElement | Window = window;
let container: HTMLElement | null = null;

const getScrollTop = () => {
  if (el instanceof Window) return window.scrollY || document.documentElement.scrollTop;
  return (el as HTMLElement).scrollTop;
};
const scrollToTop = () => {
  if (el instanceof Window) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    (el as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' });
  }
};
const onScroll = () => {
  visible.value = getScrollTop() >= (props.visibilityHeight ?? 200);
};

onMounted(() => {
  if (props.target) {
    const t = document.querySelector(props.target);
    if (t instanceof HTMLElement) {
      el = t;
      container = t;
    }
  }
  (el instanceof Window ? window : el).addEventListener('scroll', onScroll, { passive: true } as any);
  onScroll();
});
onBeforeUnmount(() => {
  (el instanceof Window ? window : el).removeEventListener('scroll', onScroll as any);
});
</script>

<template>
  <div
    v-show="visible"
    class="c-backtop"
    :class="{ 'in-container': !!container }"
    :style="{
      right: `${props.right ?? 24}px`,
      bottom: `${props.bottom ?? 24}px`,
      position: container ? 'absolute' : 'fixed'
    }"
    @click="scrollToTop"
  >
    <span class="c-backtop__icon">↑</span>
    <span v-if="props.text" class="c-backtop__text">{{ props.text }}</span>
  </div>
</template>

<style scoped>
.c-backtop {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
  color: var(--cf-color-text);
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  z-index: 999;
}
.c-backtop.in-container {
  transform: translate(0, 0);
}
.c-backtop__icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
[data-theme="huali"] .c-backtop {
  border-color: var(--cf-color-primary);
  color: var(--cf-color-primary);
  background: #fff5f5;
}
</style>
