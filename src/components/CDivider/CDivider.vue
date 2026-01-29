<script setup lang="ts">
defineProps<{
  direction?: 'horizontal' | 'vertical';
  contentPosition?: 'left' | 'center' | 'right';
  borderStyle?: 'solid' | 'dashed' | 'dotted';
}>();
</script>

<template>
  <div 
    class="c-divider"
    :class="[
      `c-divider--${direction || 'horizontal'}`,
      `c-divider--${contentPosition || 'center'}`
    ]"
  >
    <div 
      v-if="$slots.default && direction !== 'vertical'" 
      class="c-divider__content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.c-divider {
  position: relative;
  font-family: var(--cf-font-family);
  color: var(--cf-color-text-secondary);
  font-size: 14px;
}

/* Horizontal */
.c-divider--horizontal {
  display: flex;
  align-items: center;
  margin: 24px 0;
  width: 100%;
  border-top: 1px solid var(--cf-color-border);
}

.c-divider--horizontal .c-divider__content {
  padding: 0 20px;
  background-color: var(--cf-color-bg); /* Match parent bg to hide line */
  font-weight: 500;
}

/* Vertical */
.c-divider--vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  vertical-align: middle;
  background-color: var(--cf-color-border);
  position: relative;
}

/* Content Positioning */
.c-divider--left::before {
  width: 20px;
}
.c-divider--right::after {
  width: 20px;
}

/* --- Suya Theme (Ink Wash) --- */
/* Use gradients for the line instead of solid border for horizontal */
.c-divider--horizontal {
  border-top: none;
  background: linear-gradient(90deg, transparent, var(--cf-color-border) 20%, var(--cf-color-border) 80%, transparent);
  height: 1px;
}

/* If content exists, we need to handle the line differently or use pseudo-elements */
.c-divider--horizontal:has(.c-divider__content) {
  background: none;
  height: auto;
}

.c-divider--horizontal:has(.c-divider__content)::before,
.c-divider--horizontal:has(.c-divider__content)::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cf-color-border) 50%);
}
.c-divider--horizontal:has(.c-divider__content)::after {
  background: linear-gradient(90deg, var(--cf-color-border) 50%, transparent);
}

/* --- Huali Theme (Ornate) --- */
[data-theme="huali"] .c-divider--horizontal {
  background: linear-gradient(90deg, transparent, #E60012 50%, transparent); /* Red Fade */
  height: 2px;
}

[data-theme="huali"] .c-divider--horizontal:has(.c-divider__content)::before,
[data-theme="huali"] .c-divider--horizontal:has(.c-divider__content)::after {
  background: linear-gradient(90deg, transparent, #FFD700 50%, #E60012);
  height: 2px;
}
[data-theme="huali"] .c-divider--horizontal:has(.c-divider__content)::after {
  background: linear-gradient(90deg, #E60012, #FFD700 50%, transparent);
}

[data-theme="huali"] .c-divider__content {
  color: #B3000E;
  font-weight: bold;
  padding: 0 24px;
  position: relative;
}

/* Decorative diamond/knot for Huali content */
[data-theme="huali"] .c-divider__content::before,
[data-theme="huali"] .c-divider__content::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 6px;
  height: 6px;
  background-color: #FFD700;
  transform: translateY(-50%) rotate(45deg);
  border: 1px solid #E60012;
}
[data-theme="huali"] .c-divider__content::before { left: 8px; }
[data-theme="huali"] .c-divider__content::after { right: 8px; }

</style>