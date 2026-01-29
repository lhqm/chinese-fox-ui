<script setup lang="ts">
defineProps<{
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  effect?: 'light' | 'dark' | 'plain';
  closable?: boolean;
}>();

const emit = defineEmits(['close', 'click']);

const handleClose = (evt: MouseEvent) => {
  evt.stopPropagation();
  emit('close', evt);
};

const handleClick = (evt: MouseEvent) => {
  emit('click', evt);
};
</script>

<template>
  <span 
    class="c-tag" 
    :class="[
      `c-tag--${type || 'default'}`, 
      `c-tag--${effect || 'light'}`,
      { 'is-closable': closable }
    ]"
    @click="handleClick"
  >
    <slot></slot>
    <span v-if="closable" class="c-tag__close" @click="handleClose">
      <svg viewBox="0 0 1024 1024" width="12" height="12">
        <path d="M512 452.266667l226.133333-226.133334a42.666667 42.666667 0 0 1 60.373334 60.373334L572.373333 512l226.133334 226.133333a42.666667 42.666667 0 0 1-60.373334 60.373334L512 572.373333l-226.133333 226.133334a42.666667 42.666667 0 0 1-60.373334-60.373334L451.626667 512 225.493333 285.866667a42.666667 42.666667 0 0 1 60.373334-60.373334L512 452.266667z" fill="currentColor"></path>
      </svg>
    </span>
    <!-- Huali decoration -->
    <span class="c-tag__hole"></span>
    <span class="c-tag__border-decor"></span>
  </span>
</template>

<style scoped>
.c-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 0.85rem;
  font-family: var(--cf-font-family);
  border-radius: 4px;
  border: 1px solid transparent;
  white-space: nowrap;
  transition: var(--cf-transition);
  position: relative;
  overflow: hidden;
  vertical-align: middle;
}

.c-tag__close {
  margin-left: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 50%;
  padding: 1px;
  transition: background-color 0.2s;
}

.c-tag__close:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Base Types Colors */
.c-tag--default { --tag-color: #5c5c5c; --tag-bg: #f0f0f0; --tag-border: #dcdcdc; }
.c-tag--primary { --tag-color: #c02c38; --tag-bg: #fff0f0; --tag-border: #e8b0b0; }
.c-tag--success { --tag-color: #2e8b57; --tag-bg: #f0f9f4; --tag-border: #a8d8b9; }
.c-tag--warning { --tag-color: #b8860b; --tag-bg: #fffdf0; --tag-border: #e0d0a0; }
.c-tag--danger  { --tag-color: #8b0000; --tag-bg: #fff0f0; --tag-border: #dcb0b0; }

/* Effects */
.c-tag--light {
  color: var(--tag-color);
  background-color: var(--tag-bg);
  border-color: var(--tag-border);
}

.c-tag--dark {
  color: #fff;
  background-color: var(--tag-color);
  border-color: var(--tag-color);
}

.c-tag--plain {
  background: transparent;
  color: var(--tag-color);
  border-color: var(--tag-color);
}

/* --- Suya Theme (Ink Stamp) --- */
[data-theme="suya"] .c-tag {
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

[data-theme="suya"] .c-tag--dark {
  opacity: 0.9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* --- Huali Theme (Festive / Gem Colors) --- */
[data-theme="huali"] .c-tag {
  border-radius: 4px;
  padding: 4px 12px;
  border: 1px solid var(--cf-color-primary);
  background: #fff;
  color: var(--cf-color-primary);
  box-shadow: 0 2px 4px var(--cf-shadow);
  font-weight: bold;
}

/* Huali Color Variants (Outline/Light) */
[data-theme="huali"] .c-tag--primary { border-color: var(--cf-color-primary); color: var(--cf-color-primary); background: rgba(194, 62, 62, 0.08); }
[data-theme="huali"] .c-tag--success { border-color: #006400; color: #006400; background: #F0FCF0; } /* Jade */
[data-theme="huali"] .c-tag--warning { border-color: #B8860B; color: #B8860B; background: #FFFAF0; } /* Gold/Bronze */
[data-theme="huali"] .c-tag--danger  { border-color: #8B0000; color: #8B0000; background: #FFF0F0; } /* Crimson */

/* Huali Color Variants (Solid/Dark) */
[data-theme="huali"] .c-tag--dark.c-tag--primary { background: var(--cf-color-primary); color: var(--cf-color-secondary); border-color: var(--cf-color-primary-hover); }
[data-theme="huali"] .c-tag--dark.c-tag--success { background: #006400; color: #98FB98; border-color: #004d00; }
[data-theme="huali"] .c-tag--dark.c-tag--warning { background: #DAA520; color: #FFF; border-color: #B8860B; }
[data-theme="huali"] .c-tag--dark.c-tag--danger  { background: #8B0000; color: #FFF; border-color: #600000; }

/* Decoration - Knot loop (Color Match) */
[data-theme="huali"] .c-tag__hole {
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: currentColor; /* Use text color */
  opacity: 0.5;
}

[data-theme="huali"] .c-tag__border-decor {
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  border: 1px solid transparent;
  pointer-events: none;
}
</style>
