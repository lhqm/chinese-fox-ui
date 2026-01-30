<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Trigger = 'hover' | 'click';

const props = defineProps<{
  content: string;
  placement?: Placement;
  trigger?: Trigger;
  disabled?: boolean;
  offset?: number;
}>();

const isOpen = ref(false);
const triggerEl = ref<HTMLElement | null>(null);
const pos = ref<{ top: number; left: number } | null>(null);

const placement = ref<Placement>(props.placement || 'top');
const triggerType = ref<Trigger>(props.trigger || 'hover');
const offset = ref<number>(props.offset ?? 8);

const open = () => {
  if (props.disabled) return;
  isOpen.value = true;
  updatePos();
};
const close = () => { isOpen.value = false; };
const toggle = () => { isOpen.value ? close() : open(); };

const updatePos = () => {
  const el = triggerEl.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  let top = 0, left = 0;
  switch (placement.value) {
    case 'top':
      top = rect.top + scrollY - offset.value;
      left = rect.left + scrollX + rect.width / 2;
      break;
    case 'bottom':
      top = rect.bottom + scrollY + offset.value;
      left = rect.left + scrollX + rect.width / 2;
      break;
    case 'left':
      top = rect.top + scrollY + rect.height / 2;
      left = rect.left + scrollX - offset.value;
      break;
    case 'right':
      top = rect.top + scrollY + rect.height / 2;
      left = rect.right + scrollX + offset.value;
      break;
  }
  pos.value = { top, left };
};

const onDocClick = (e: MouseEvent) => {
  if (!triggerEl.value) return;
  const target = e.target as Node;
  if (triggerEl.value.contains(target)) return;
  close();
};

onMounted(() => {
  window.addEventListener('resize', updatePos);
  window.addEventListener('scroll', updatePos, true);
  document.addEventListener('click', onDocClick);
});
onUnmounted(() => {
  window.removeEventListener('resize', updatePos);
  window.removeEventListener('scroll', updatePos, true);
  document.removeEventListener('click', onDocClick);
});

watch(isOpen, (val) => { if (val) updatePos(); });
</script>

<template>
  <span 
    class="c-tooltip__trigger" 
    ref="triggerEl"
    @mouseenter="triggerType === 'hover' && open()"
    @mouseleave="triggerType === 'hover' && close()"
    @click="triggerType === 'click' && toggle()"
  >
    <slot></slot>
  </span>

  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen && pos" 
        class="c-tooltip" 
        :class="[`c-tooltip--${placement}`]"
        :style="{
          top: `${pos.top}px`,
          left: `${pos.left}px`
        }"
      >
        <div class="c-tooltip__content">{{ content }}</div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.c-tooltip__trigger {
  display: inline-flex;
  align-items: center;
}

.c-tooltip {
  position: absolute;
  z-index: 1400;
  pointer-events: none;
  transform: translate(-50%, -100%);
}
.c-tooltip--bottom { transform: translate(-50%, 0%); }
.c-tooltip--left { transform: translate(-100%, -50%); }
.c-tooltip--right { transform: translate(0%, -50%); }

.c-tooltip__content {
  padding: 8px 10px;
  font-size: 12px;
  border-radius: 4px;
  color: var(--cf-color-text);
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  box-shadow: var(--cf-shadow);
  position: relative;
}

/* Arrow */
.c-tooltip__content::after {
  content: '';
  position: absolute;
  width: 8px; height: 8px;
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  transform: rotate(45deg);
}
.c-tooltip--top .c-tooltip__content::after {
  bottom: -5px; left: 50%; transform: translateX(-50%) rotate(45deg);
  border-left: none; border-bottom: none;
}
.c-tooltip--bottom .c-tooltip__content::after {
  top: -5px; left: 50%; transform: translateX(-50%) rotate(45deg);
  border-right: none; border-top: none;
}
.c-tooltip--left .c-tooltip__content::after {
  right: -5px; top: 50%; transform: translateY(-50%) rotate(45deg);
  border-left: none; border-top: none;
}
.c-tooltip--right .c-tooltip__content::after {
  left: -5px; top: 50%; transform: translateY(-50%) rotate(45deg);
  border-right: none; border-bottom: none;
}

/* Suya */
[data-theme="suya"] .c-tooltip__content {
  background: rgba(255,255,255,0.85);
  border: 1px solid rgba(0,0,0,0.08);
  backdrop-filter: blur(6px);
}

/* Huali */
[data-theme="huali"] .c-tooltip__content {
  background: #fff;
  border: 1px solid var(--cf-color-primary);
  box-shadow: 0 4px 12px var(--cf-shadow);
}
</style>
