<script setup lang="ts">
import { computed } from 'vue';
import { watch } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  title?: string;
  width?: string;
}>();

const emit = defineEmits(['update:modelValue', 'close', 'open']);

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

const dialogStyle = computed(() => ({
  width: props.width || '500px'
}));

watch(() => props.modelValue, (val) => {
  if (val) emit('open');
});
</script>

<template>
  <Transition name="dialog-fade">
    <div v-if="modelValue" class="c-dialog-overlay" @click.self="close">
      <div class="c-dialog" :style="dialogStyle">
        <!-- Close Button -->
        <button class="c-dialog__close" @click="close">
          <span class="close-icon">×</span>
        </button>
        
        <!-- Header -->
        <div v-if="title" class="c-dialog__header">
          <h3 class="c-dialog__title">{{ title }}</h3>
        </div>
        
        <!-- Body -->
        <div class="c-dialog__body">
          <slot></slot>
        </div>
        
        <!-- Footer -->
        <div v-if="$slots.footer" class="c-dialog__footer">
          <slot name="footer"></slot>
        </div>

        <!-- Huali Decorations -->
        <div class="c-dialog__border-corner c-dialog__border-corner--tl"></div>
        <div class="c-dialog__border-corner c-dialog__border-corner--tr"></div>
        <div class="c-dialog__border-corner c-dialog__border-corner--bl"></div>
        <div class="c-dialog__border-corner c-dialog__border-corner--br"></div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.c-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  transition: opacity 0.3s ease;
}

.c-dialog {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  max-width: 90vw;
  transition: var(--cf-transition);
}

.c-dialog__header {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-dialog__title {
  margin: 0;
  font-family: var(--cf-font-family);
  font-size: 1.25rem;
  font-weight: 600;
}

.c-dialog__body {
  padding: 24px;
  flex: 1;
  overflow-y: auto;
  font-family: var(--cf-font-family);
  line-height: 1.6;
}

.c-dialog__footer {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.c-dialog__close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--cf-transition);
}

.close-icon {
  font-size: 24px;
  line-height: 1;
}

/* --- Suya Theme (Ink Wash) --- */
[data-theme="suya"] .c-dialog {
  background: #fdfdfd;
  /* Rice paper texture overlay simulation */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  border-radius: 4px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

[data-theme="suya"] .c-dialog__header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

[data-theme="suya"] .c-dialog__title {
  color: #333;
}

[data-theme="suya"] .c-dialog__close {
  color: #999;
}

[data-theme="suya"] .c-dialog__close:hover {
  background-color: rgba(0,0,0,0.05);
  color: #333;
}

/* Huali Theme - Wedding/New Year Scroll (Simplified) */
[data-theme="huali"] .c-dialog {
  background: #FCFAF2; /* Cream Paper */
  border: 2px solid var(--cf-color-primary); /* Reduced border thickness */
  border-radius: 8px;
  box-shadow: 0 10px 40px var(--cf-shadow), 0 0 20px rgba(0,0,0,0.05);
  /* Removed heavy pattern overlay for center */
}

[data-theme="huali"] .c-dialog__header {
  text-align: center;
  border-bottom: 1px dashed var(--cf-color-primary); /* Dashed line */
  margin-bottom: 20px;
  padding-bottom: 15px;
}

[data-theme="huali"] .c-dialog__title {
  color: var(--cf-color-primary);
  font-size: 1.5rem;
  font-weight: bold;
}

[data-theme="huali"] .c-dialog__footer {
  border-top: 1px dashed var(--cf-color-primary);
  padding-top: 20px;
  margin-top: 20px;
  justify-content: center; 
}

/* Corner Decorations - Smaller and simpler */
[data-theme="huali"] .c-dialog__border-corner {
  position: absolute;
  width: 24px; /* Reduced size */
  height: 24px;
  background: transparent;
  z-index: 10;
  pointer-events: none;
  border: none;
}

/* Use pseudo-elements for clean geometric corners instead of image */
[data-theme="huali"] .c-dialog__border-corner::before {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  border: 2px solid #FFD700; /* Gold inner corner */
  border-radius: 2px;
}

[data-theme="huali"] .c-dialog__border-corner--tl { top: 4px; left: 4px; border-top: 2px solid #E60012; border-left: 2px solid #E60012; }
[data-theme="huali"] .c-dialog__border-corner--tr { top: 4px; right: 4px; border-top: 2px solid #E60012; border-right: 2px solid #E60012; }
[data-theme="huali"] .c-dialog__border-corner--br { bottom: 4px; right: 4px; border-bottom: 2px solid #E60012; border-right: 2px solid #E60012; }
[data-theme="huali"] .c-dialog__border-corner--bl { bottom: 4px; left: 4px; border-bottom: 2px solid #E60012; border-left: 2px solid #E60012; }

/* Hide the pseudo-element if we want just the outer red corner, 
   but let's keep it for a double-layer effect (Red outer, Gold inner) */
[data-theme="huali"] .c-dialog__border-corner::before {
  border-color: #E60012;
  top: 4px; left: 4px; 
  /* Adjust based on corner position? Let's simplify: just use CSS borders on the element itself */
  display: none; 
}

/* Re-apply simplified corner styles directly */
[data-theme="huali"] .c-dialog__border-corner {
  background: none;
  border: none;
}
[data-theme="huali"] .c-dialog__border-corner--tl { border-top: 3px solid #E60012; border-left: 3px solid #E60012; top: -2px; left: -2px; border-top-left-radius: 4px; }
[data-theme="huali"] .c-dialog__border-corner--tr { border-top: 3px solid #E60012; border-right: 3px solid #E60012; top: -2px; right: -2px; border-top-right-radius: 4px; }
[data-theme="huali"] .c-dialog__border-corner--br { border-bottom: 3px solid #E60012; border-right: 3px solid #E60012; bottom: -2px; right: -2px; border-bottom-right-radius: 4px; }
[data-theme="huali"] .c-dialog__border-corner--bl { border-bottom: 3px solid #E60012; border-left: 3px solid #E60012; bottom: -2px; left: -2px; border-bottom-left-radius: 4px; }

/* Animations */
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}

.dialog-fade-enter-active .c-dialog,
.dialog-fade-leave-active .c-dialog {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dialog-fade-enter-from .c-dialog {
  transform: scale(0.95) translateY(-20px);
  opacity: 0;
}

.dialog-fade-leave-to .c-dialog {
  transform: scale(0.95) translateY(20px);
  opacity: 0;
}
</style>
