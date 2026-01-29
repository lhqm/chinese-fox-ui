<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  title?: string;
  direction?: 'rtl' | 'ltr' | 'ttb' | 'btt';
  size?: string;
  closeOnClickModal?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'close'): void;
}>();

const handleClose = () => {
  emit('update:modelValue', false);
  emit('close');
};

const handleMaskClick = () => {
  if (props.closeOnClickModal !== false) {
    handleClose();
  }
};

const directionClass = computed(() => `c-drawer--${props.direction || 'rtl'}`);
const sizeStyle = computed(() => {
  const isVertical = props.direction === 'ttb' || props.direction === 'btt';
  return isVertical ? { height: props.size || '30%' } : { width: props.size || '30%' };
});
</script>

<template>
  <Teleport to="body">
    <transition name="c-drawer-fade">
      <div v-if="modelValue" class="c-drawer-overlay" @click="handleMaskClick"></div>
    </transition>
    
    <transition :name="`c-drawer-slide-${direction || 'rtl'}`">
      <div 
        v-if="modelValue" 
        class="c-drawer"
        :class="[directionClass]"
        :style="sizeStyle"
        @click.stop
      >
        <header class="c-drawer__header" v-if="title || $slots.header">
          <slot name="header">
            <span class="c-drawer__title">{{ title }}</span>
          </slot>
          <button class="c-drawer__close-btn" @click="handleClose">×</button>
        </header>
        
        <div class="c-drawer__body">
          <slot></slot>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.c-drawer-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
}

.c-drawer {
  position: fixed;
  background-color: var(--cf-color-bg);
  z-index: 2001;
  box-shadow: 0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
}

.c-drawer--rtl { top: 0; right: 0; bottom: 0; }
.c-drawer--ltr { top: 0; left: 0; bottom: 0; }
.c-drawer--ttb { top: 0; left: 0; right: 0; }
.c-drawer--btt { bottom: 0; left: 0; right: 0; }

.c-drawer__header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--cf-color-border);
}

.c-drawer__title {
  font-size: 18px;
  font-weight: 500;
  color: var(--cf-color-text);
}

.c-drawer__close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--cf-color-text-secondary);
  transition: color 0.3s;
}

.c-drawer__close-btn:hover {
  color: var(--cf-color-primary);
}

.c-drawer__body {
  flex: 1;
  padding: 20px;
  overflow: auto;
}

/* --- Suya Theme (Paper Screen) --- */
.c-drawer {
  background-image: var(--cf-bg-pattern-secondary);
}

/* --- Huali Theme (Ornate Screen) --- */
[data-theme="huali"] .c-drawer {
  border-left: 4px solid var(--cf-color-primary); /* Frame */
  background-color: #FCFAF2;
}

[data-theme="huali"] .c-drawer--ltr { border-left: none; border-right: 4px solid var(--cf-color-primary); }
[data-theme="huali"] .c-drawer--ttb { border-left: none; border-bottom: 4px solid var(--cf-color-primary); }
[data-theme="huali"] .c-drawer--btt { border-left: none; border-top: 4px solid var(--cf-color-primary); }

[data-theme="huali"] .c-drawer__header {
  background: linear-gradient(to right, #FFF8E7, #fff);
  border-bottom: 1px solid var(--cf-color-secondary);
}

[data-theme="huali"] .c-drawer__title {
  color: var(--cf-color-primary);
  font-weight: bold;
}

[data-theme="huali"] .c-drawer__close-btn {
  color: var(--cf-color-primary);
}

/* Animations */
.c-drawer-fade-enter-active, .c-drawer-fade-leave-active { transition: opacity 0.3s; }
.c-drawer-fade-enter-from, .c-drawer-fade-leave-to { opacity: 0; }

.c-drawer-slide-rtl-enter-active, .c-drawer-slide-rtl-leave-active { transition: transform 0.3s; }
.c-drawer-slide-rtl-enter-from, .c-drawer-slide-rtl-leave-to { transform: translateX(100%); }

.c-drawer-slide-ltr-enter-active, .c-drawer-slide-ltr-leave-active { transition: transform 0.3s; }
.c-drawer-slide-ltr-enter-from, .c-drawer-slide-ltr-leave-to { transform: translateX(-100%); }

.c-drawer-slide-ttb-enter-active, .c-drawer-slide-ttb-leave-active { transition: transform 0.3s; }
.c-drawer-slide-ttb-enter-from, .c-drawer-slide-ttb-leave-to { transform: translateY(-100%); }

.c-drawer-slide-btt-enter-active, .c-drawer-slide-btt-leave-active { transition: transform 0.3s; }
.c-drawer-slide-btt-enter-from, .c-drawer-slide-btt-leave-to { transform: translateY(100%); }
</style>
