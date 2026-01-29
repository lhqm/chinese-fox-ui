<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
}>();
</script>

<template>
  <button 
    class="c-button" 
    :class="[
      `c-button--${variant || 'primary'}`, 
      { 'is-disabled': disabled || loading, 'is-loading': loading }
    ]"
    :disabled="disabled || loading"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" class="c-button__loading-icon">
      <svg viewBox="0 0 1024 1024" width="1em" height="1em">
        <path d="M512 64a448 448 0 0 1 448 448c0 248.544-201.472 448-448 448S64 760.544 64 512 265.472 64 512 64zm0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768z" opacity="0.2" fill="currentColor"></path>
        <path d="M512 64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384V64z" fill="currentColor">
          <animateTransform attributeName="transform" type="rotate" from="0 512 512" to="360 512 512" dur="1s" repeatCount="indefinite"/>
        </path>
      </svg>
    </span>

    <!-- Background layers for Huali effects -->
    <div class="c-button__bg-layer"></div>
    <div class="c-button__shine"></div>
    
    <span class="c-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.c-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  font-family: var(--cf-font-family);
  font-size: 1rem;
  border-radius: var(--cf-border-radius);
  border: var(--cf-border-width) var(--cf-border-style) var(--cf-color-primary);
  background: var(--cf-color-surface);
  color: var(--cf-color-primary);
  cursor: pointer;
  transition: var(--cf-transition);
  overflow: hidden;
  outline: none;
  user-select: none;
  z-index: 1;
}

.c-button__loading-icon {
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  animation: spin 1s linear infinite;
}

.c-button__content {
  position: relative;
  z-index: 2;
}

.c-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--cf-shadow-hover);
}

.c-button:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: none;
}

/* Primary Variant */
.c-button--primary {
  background: var(--cf-color-primary);
  color: #fff;
  border-color: var(--cf-color-primary);
}

.c-button--primary:hover:not(:disabled) {
  background: var(--cf-color-primary-hover);
  border-color: var(--cf-color-primary-hover);
}

/* Suya Specifics */
[data-theme="suya"] .c-button--primary {
  /* Soft matte finish */
  background: linear-gradient(to bottom, #5a7a84, #4a6a74);
  box-shadow: 0 2px 5px rgba(74, 106, 116, 0.2);
  border: none;
}

[data-theme="suya"] .c-button--primary:hover:not(:disabled) {
  background: linear-gradient(to bottom, #4a6a74, #3a5a64);
  box-shadow: 0 4px 10px rgba(74, 106, 116, 0.3);
}

[data-theme="suya"] .c-button--secondary {
  background: transparent;
  color: var(--cf-color-text);
  border: 1px solid var(--cf-color-border);
}

[data-theme="suya"] .c-button--secondary:hover:not(:disabled) {
  color: var(--cf-color-primary);
  border-color: var(--cf-color-primary);
  background: rgba(74, 106, 116, 0.05);
}

/* Huali Theme - Refined Semantic Colors */
[data-theme="huali"] .c-button {
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-primary);
  color: var(--cf-color-primary);
  box-shadow: 0 2px 4px var(--cf-shadow);
  font-weight: bold;
  overflow: visible;
}

[data-theme="huali"] .c-button:hover {
  background: rgba(194, 62, 62, 0.05);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px var(--cf-shadow-hover);
}

[data-theme="huali"] .c-button:active {
  transform: translateY(1px);
}

/* Primary - Red/Gold (Official/Festive) */
[data-theme="huali"] .c-button--primary {
  background: linear-gradient(to bottom, var(--cf-color-primary), var(--cf-color-primary-hover));
  color: var(--cf-color-secondary);
  border-color: var(--cf-color-primary-hover);
  box-shadow: 0 4px 6px var(--cf-shadow);
}
[data-theme="huali"] .c-button--primary:hover {
  background: linear-gradient(to bottom, var(--cf-color-primary-hover), var(--cf-color-primary));
  box-shadow: 0 0 10px var(--cf-shadow-hover);
}

/* Secondary - Gold/Brown (Earth/Bronze) */
[data-theme="huali"] .c-button--secondary {
  background: #fff;
  border: 1px solid #B8860B;
  color: #B8860B;
  box-shadow: none;
}
[data-theme="huali"] .c-button--secondary:hover {
  background: rgba(184, 134, 11, 0.1);
  border-color: #DAA520;
  color: #DAA520;
}

/* Success - Jade Green (Jade/Nature) */
/* Assuming CButton has a success variant or we add one. If not, this prepares for it. */
[data-theme="huali"] .c-button.c-button--success {
  background: linear-gradient(to bottom, #006400, #004d00);
  color: #98FB98; /* Pale Green text */
  border-color: #004d00;
  box-shadow: 0 4px 6px rgba(0, 100, 0, 0.3);
}
[data-theme="huali"] .c-button.c-button--success:hover {
  background: linear-gradient(to bottom, #008000, #006400);
  box-shadow: 0 0 10px rgba(0, 128, 0, 0.5);
}

/* Danger - Deep Crimson (Blood/Fire) */
/* Usually same as primary red but maybe darker */
[data-theme="huali"] .c-button.c-button--danger {
  background: linear-gradient(to bottom, #8B0000, #600000);
  color: #fff;
  border-color: #500000;
}

/* Gold Rim Effect - Only for solid colored buttons */
[data-theme="huali"] .c-button--primary::after,
[data-theme="huali"] .c-button.c-button--success::after,
[data-theme="huali"] .c-button.c-button--danger::after {
  content: '';
  position: absolute;
  top: 2px; left: 2px; right: 2px; bottom: 2px;
  border: 1px solid rgba(255, 215, 0, 0.4);
  border-radius: 4px;
  pointer-events: none;
}

/* Disable existing generic styles */
[data-theme="huali"] .c-button::after {
   display: none; 
}
[data-theme="huali"] .c-button--primary::after,
[data-theme="huali"] .c-button--success::after,
[data-theme="huali"] .c-button--danger::after {
   display: block; 
}

.c-button.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(0.8);
  transform: none !important;
  box-shadow: none !important;
}
</style>
