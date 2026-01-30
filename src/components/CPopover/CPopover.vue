<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Trigger = 'hover' | 'click';

const props = defineProps<{
  title?: string;
  placement?: Placement;
  trigger?: Trigger;
  width?: number;
  disabled?: boolean;
  offset?: number;
}>();

const emit = defineEmits<{
  (e: 'visible-change', value: boolean): void;
}>();

const isOpen = ref(false);
const triggerEl = ref<HTMLElement | null>(null);
const pos = ref<{ top: number; left: number } | null>(null);

const placement = ref<Placement>(props.placement || 'bottom');
const triggerType = ref<Trigger>(props.trigger || 'click');
const offset = ref<number>(props.offset ?? 8);

const open = () => {
  if (props.disabled) return;
  isOpen.value = true;
  emit('visible-change', true);
  updatePos();
};
const close = () => { isOpen.value = false; emit('visible-change', false); };
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
    class="c-popover__trigger" 
    ref="triggerEl"
    @mouseenter="triggerType === 'hover' && open()"
    @mouseleave="triggerType === 'hover' && close()"
    @click="triggerType === 'click' && toggle()"
  >
    <slot name="reference">
      <slot></slot>
    </slot>
  </span>

  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen && pos" 
        class="c-popover" 
        :class="[`c-popover--${placement}`]"
        :style="{
          top: `${pos.top}px`,
          left: `${pos.left}px`,
          width: (props.width || 260) + 'px'
        }"
      >
        <div v-if="title" class="c-popover__title">{{ title }}</div>
        <div class="c-popover__content">
          <slot name="content"></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.c-popover__trigger {
  display: inline-flex;
  align-items: center;
}

.c-popover {
  position: absolute;
  z-index: 1450;
  transform: translate(-50%, 0%);
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  border-radius: var(--cf-border-radius);
  box-shadow: var(--cf-shadow-hover);
}
.c-popover--top { transform: translate(-50%, -100%); }
.c-popover--left { transform: translate(-100%, -50%); }
.c-popover--right { transform: translate(0%, -50%); }

.c-popover__title {
  padding: 10px 12px;
  font-weight: 600;
  border-bottom: 1px solid var(--cf-color-border);
}
.c-popover__content {
  max-height: 280px;
  overflow-y: auto;
  padding: 12px;
}

/* Suya */
[data-theme="suya"] .c-popover {
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
}
[data-theme="suya"] .c-popover__title {
  border-bottom: 1px dashed rgba(0,0,0,0.12);
}

/* Huali */
[data-theme="huali"] .c-popover {
  background: #fff;
  border: 1px solid var(--cf-color-primary);
  box-shadow: 0 6px 16px var(--cf-shadow);
}
[data-theme="huali"] .c-popover__title {
  color: var(--cf-color-primary);
  border-bottom: 1px dashed var(--cf-color-primary);
}
</style>
