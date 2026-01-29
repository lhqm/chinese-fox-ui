<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  src?: string;
  alt?: string;
  size?: number | 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
  text?: string;
}>();

const sizeStyle = computed(() => {
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64
  };
  const sizeVal = typeof props.size === 'number' ? props.size : sizeMap[props.size || 'medium'];
  return {
    width: `${sizeVal}px`,
    height: `${sizeVal}px`,
    fontSize: `${sizeVal * 0.4}px`
  };
});
</script>

<template>
  <div 
    class="c-avatar" 
    :class="[`c-avatar--${shape || 'circle'}`]"
    :style="sizeStyle"
  >
    <img v-if="src" :src="src" :alt="alt" class="c-avatar__img" />
    <span v-else class="c-avatar__text">{{ text || '?' }}</span>
    
    <!-- Huali Decoration Frame -->
    <div class="c-avatar__frame"></div>
  </div>
</template>

<style scoped>
.c-avatar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  color: #666;
  overflow: hidden;
  position: relative;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.c-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-avatar--circle {
  border-radius: 50%;
}

.c-avatar--square {
  border-radius: 4px;
}

/* --- Suya Theme (Ink / Soft) --- */
.c-avatar {
  background-color: var(--cf-color-bg-secondary, #f0f0f0);
  border-color: var(--cf-color-border);
}

/* --- Huali Theme (Portrait Frame) --- */
[data-theme="huali"] .c-avatar {
  background-color: #FCFAF2;
  border: none;
  overflow: visible; /* Allow frame to stick out */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

[data-theme="huali"] .c-avatar__img,
[data-theme="huali"] .c-avatar__text {
  border-radius: inherit;
  z-index: 1;
}

/* Huali Gold/Red Frame */
[data-theme="huali"] .c-avatar__frame {
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  border: 2px solid #E60012;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  box-shadow: inset 0 0 0 1px #FFD700; /* Inner Gold Line */
}

/* Huali Shape Overrides - Make squares slightly octagonal or fancy */
[data-theme="huali"] .c-avatar--square {
  border-radius: 8px;
}

[data-theme="huali"] .c-avatar--square .c-avatar__frame::before {
  content: '';
  position: absolute;
  top: -4px; left: -4px;
  width: 8px; height: 8px;
  border-top: 2px solid #FFD700;
  border-left: 2px solid #FFD700;
  border-top-left-radius: 4px;
}

[data-theme="huali"] .c-avatar--square .c-avatar__frame::after {
  content: '';
  position: absolute;
  bottom: -4px; right: -4px;
  width: 8px; height: 8px;
  border-bottom: 2px solid #FFD700;
  border-right: 2px solid #FFD700;
  border-bottom-right-radius: 4px;
}
</style>