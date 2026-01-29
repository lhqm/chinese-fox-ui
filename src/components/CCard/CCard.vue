<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="c-card">
    <div v-if="title" class="c-card__header">
      <span class="c-card__title">{{ title }}</span>
      <!-- Huali Header Decoration -->
      <div class="c-card__header-decor-left"></div>
      <div class="c-card__header-decor-right"></div>
    </div>
    <div class="c-card__body">
      <slot></slot>
    </div>

    <!-- Huali Decorative Elements (Edge Coloring) -->
    <div class="c-card__border-frame"></div>
    <!-- Corner Ornaments (Pavilion/Lattice style) -->
    <div class="c-card__corner c-card__corner--tl"></div>
    <div class="c-card__corner c-card__corner--tr"></div>
    <div class="c-card__corner c-card__corner--bl"></div>
    <div class="c-card__corner c-card__corner--br"></div>
  </div>
</template>

<style scoped>
.c-card {
  background: var(--cf-color-surface);
  border-radius: var(--cf-border-radius);
  border: 1px solid var(--cf-color-border);
  box-shadow: var(--cf-shadow);
  transition: var(--cf-transition);
  overflow: hidden;
  position: relative;
  /* Ensure content is above decorations if needed, but decorations are absolute */
}

.c-card:hover {
  box-shadow: var(--cf-shadow-hover);
}

.c-card__header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--cf-color-border);
  font-family: var(--cf-font-family);
  font-weight: bold;
  font-size: 1.1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-card__body {
  padding: 20px;
  position: relative;
  z-index: 1; /* Keep content readable */
}

/* --- Suya Theme (Ink Wash) --- */
[data-theme="suya"] .c-card {
  border: none;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px); /* Frosted glass */
}

[data-theme="suya"] .c-card__header {
  border-bottom: 1px dashed rgba(0,0,0,0.1);
}

/* --- Huali Theme (Refined - Corner Accents) --- */
[data-theme="huali"] .c-card {
  background: #FCFAF2; /* Cream Paper Background */
  border: none; /* Remove full border */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: visible; /* Allow corners to protrude */
  margin: 10px; /* Space for corners */
  position: relative;
}

/* Diagonal Corner Decorations */
[data-theme="huali"] .c-card::before {
  content: '';
  position: absolute;
  top: -4px; left: -4px;
  width: 24px; height: 24px;
  border-top: 3px solid #E60012;
  border-left: 3px solid #E60012;
  border-top-left-radius: 4px;
  z-index: 1;
}

[data-theme="huali"] .c-card::after {
  content: '';
  position: absolute;
  bottom: -4px; right: -4px;
  width: 24px; height: 24px;
  border-bottom: 3px solid #E60012;
  border-right: 3px solid #E60012;
  border-bottom-right-radius: 4px;
  z-index: 1;
}

/* Optional: Add a subtle cloud/pattern at the top right inside */
[data-theme="huali"] .c-card__header {
  border-bottom: 1px dashed rgba(230, 0, 18, 0.2);
  background: transparent;
  position: relative;
}

[data-theme="huali"] .c-card__title {
  color: #B3000E;
  font-weight: bold;
}

</style>
