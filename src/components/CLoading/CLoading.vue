<script setup lang="ts">
import { Teleport } from 'vue';

const props = defineProps<{
  visible?: boolean;
  fullscreen?: boolean;
  text?: string;
  size?: number;
}>();
</script>

<template>
  <Teleport to="body" v-if="fullscreen">
    <div v-show="visible" class="c-loading c-loading--fullscreen">
      <div class="c-loading__spinner">
        <span class="c-loading__ink"></span>
      </div>
      <p v-if="text" class="c-loading__text">{{ text }}</p>
    </div>
  </Teleport>
  <div v-else v-show="visible" class="c-loading">
    <div class="c-loading__spinner">
      <span class="c-loading__ink"></span>
    </div>
    <p v-if="text" class="c-loading__text">{{ text }}</p>
  </div>
  <slot v-if="!visible && !fullscreen"></slot>
</template>

<style scoped>
.c-loading {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--cf-font-family);
  color: var(--cf-color-text);
}
.c-loading--fullscreen {
  position: fixed;
  inset: 0;
  background: rgba(245, 247, 249, 0.75);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.c-loading__spinner {
  width: 42px;
  height: 42px;
  position: relative;
}
.c-loading__ink {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(74,106,116,0.28) 0%, rgba(74,106,116,0.08) 40%, transparent 60%);
  animation: ink-ripple 1200ms ease-out infinite;
}
.c-loading__text {
  font-size: 14px;
  color: var(--cf-color-text-secondary);
}

/* Huali variant via theme overrides */
[data-theme="huali"] .c-loading--fullscreen {
  background: rgba(252, 250, 245, 0.84);
}
[data-theme="huali"] .c-loading__ink {
  background: radial-gradient(circle, rgba(226,0,18,0.28) 0%, rgba(226,0,18,0.08) 40%, transparent 60%);
  animation: red-pulse 900ms ease-in-out infinite;
}
</style>
