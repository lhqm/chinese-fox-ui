<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value?: string | number;
  max?: number;
  isDot?: boolean;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}>();

const content = computed(() => {
  if (props.isDot) return '';
  if (typeof props.value === 'number' && props.max && props.value > props.max) {
    return `${props.max}+`;
  }
  return props.value;
});
</script>

<template>
  <div class="c-badge">
    <slot></slot>
    <transition name="c-badge-zoom">
      <sup 
        v-if="content || isDot"
        class="c-badge__content"
        :class="[
          `c-badge__content--${type || 'danger'}`,
          { 'c-badge__content--dot': isDot }
        ]"
      >
        {{ content }}
      </sup>
    </transition>
  </div>
</template>

<style scoped>
.c-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
}

.c-badge__content {
  position: absolute;
  top: 0;
  right: 10px;
  transform: translateY(-50%) translateX(100%);
  z-index: 10;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  font-size: 12px;
  color: #fff;
  background-color: var(--cf-color-primary, #E60012);
  border-radius: 10px;
  border: 1px solid #fff;
  white-space: nowrap;
  font-family: var(--cf-font-family);
}

.c-badge__content--dot {
  height: 8px;
  width: 8px;
  padding: 0;
  right: 5px;
  border-radius: 50%;
}

/* Types (Suya) */
.c-badge__content--primary { background-color: var(--cf-color-primary); }
.c-badge__content--success { background-color: #67C23A; }
.c-badge__content--warning { background-color: #E6A23C; }
.c-badge__content--danger { background-color: #F56C6C; }
.c-badge__content--info { background-color: #909399; }

/* --- Huali Theme (Gem / Jewel) --- */
[data-theme="huali"] .c-badge__content {
  border: 1px solid #FFD700; /* Gold Rim */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  font-weight: bold;
}

[data-theme="huali"] .c-badge__content--primary { background-color: #E60012; }
[data-theme="huali"] .c-badge__content--success { background-color: #006400; color: #98FB98; } /* Jade */
[data-theme="huali"] .c-badge__content--warning { background-color: #B8860B; color: #fff; } /* Bronze */
[data-theme="huali"] .c-badge__content--danger { background-color: #8B0000; } /* Crimson */
[data-theme="huali"] .c-badge__content--info { background-color: #1E3A8A; } /* Sapphire */

/* Huali Dot - Jewel Effect */
[data-theme="huali"] .c-badge__content--dot {
  box-shadow: 0 0 4px currentColor;
}

/* Animation */
.c-badge-zoom-enter-active,
.c-badge-zoom-leave-active {
  transition: transform 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46), opacity 0.3s;
}
.c-badge-zoom-enter-from,
.c-badge-zoom-leave-to {
  transform: translateY(-50%) translateX(100%) scale(0);
  opacity: 0;
}
</style>