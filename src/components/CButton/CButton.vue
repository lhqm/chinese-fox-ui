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
  background: #4a6a74;
  box-shadow: 0 2px 5px rgba(74, 106, 116, 0.18);
  border: 1px solid rgba(74,106,116,0.25);
}

[data-theme="suya"] .c-button--primary:hover:not(:disabled) {
  background: #3a5a64;
  box-shadow: 0 4px 10px rgba(74, 106, 116, 0.26);
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

[data-theme="suya"] .c-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(74,106,116,0.18);
}

[data-theme="suya"] .c-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(40% 40% at 30% 30%, rgba(74,106,116,0.12), transparent 60%);
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}
[data-theme="suya"] .c-button:hover::before {
  opacity: 1;
}
[data-theme="suya"] .c-button:active::before {
  opacity: 0.6;
}

/* Huali Theme - Refined Semantic Colors */
[data-theme="huali"] .c-button {
  background: #fff;
  border: 1px solid var(--cf-color-border);
  color: var(--cf-color-text);
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  font-weight: 500;
  overflow: hidden;
}

[data-theme="huali"] .c-button:hover {
  background: rgba(230,0,18,0.05);
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}

[data-theme="huali"] .c-button:active {
  transform: translateY(1px);
}

/* Primary - Red/Gold (Official/Festive) */
[data-theme="huali"] .c-button--primary {
  background: #fff;
  color: var(--cf-color-primary);
  border-color: var(--cf-color-primary);
  box-shadow: none;
}
[data-theme="huali"] .c-button--primary:hover {
  background: rgba(230,0,18,0.06);
  border-color: var(--cf-color-primary-hover);
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
  background: #fff;
  color: #006400;
  border-color: #006400;
  box-shadow: none;
}
[data-theme="huali"] .c-button.c-button--success:hover {
  background: rgba(0,128,0,0.08);
}

/* Danger - Deep Crimson (Blood/Fire) */
/* Usually same as primary red but maybe darker */
[data-theme="huali"] .c-button.c-button--danger {
  background: #fff;
  color: #8B0000;
  border-color: #8B0000;
}

/* Gold Rim Effect - Only for solid colored buttons */
[data-theme="huali"] .c-button::after,
[data-theme="huali"] .c-button--primary::after,
[data-theme="huali"] .c-button--success::after,
[data-theme="huali"] .c-button--danger::after {
  display: none;
}

[data-theme="huali"] .c-button__bg-layer,
[data-theme="huali"] .c-button__shine {
  display: none;
}

.c-button.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(0.8);
  transform: none !important;
  box-shadow: none !important;
}
</style>
