<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  title?: string;
  type?: 'success' | 'warning' | 'info' | 'error';
  description?: string;
  closable?: boolean;
  center?: boolean;
  showIcon?: boolean;
  effect?: 'light' | 'dark';
}>();

const emit = defineEmits(['close']);

const visible = ref(true);

const handleClose = () => {
  visible.value = false;
  emit('close');
};

const typeClass = computed(() => `c-alert--${props.type || 'info'}`);
</script>

<template>
  <Transition name="cf-fade-in-linear">
    <div 
      v-show="visible"
      class="c-alert"
      :class="[
        typeClass,
        effect === 'dark' ? 'is-dark' : 'is-light',
        { 'is-center': center }
      ]"
    >
      <div class="c-alert__content">
        <span v-if="title" class="c-alert__title" :class="{ 'is-bold': description }">
          {{ title }}
        </span>
        <p v-if="description" class="c-alert__description">
          {{ description }}
        </p>
        <span v-if="closable" class="c-alert__close-btn" @click="handleClose">
          <svg viewBox="0 0 1024 1024" width="12" height="12">
            <path d="M512 452.266667l226.133333-226.133334a42.666667 42.666667 0 0 1 60.373334 60.373334L572.373333 512l226.133334 226.133333a42.666667 42.666667 0 0 1-60.373334 60.373334L512 572.373333l-226.133333 226.133334a42.666667 42.666667 0 0 1-60.373334-60.373334L451.626667 512 225.493333 285.866667a42.666667 42.666667 0 0 1 60.373334-60.373334L512 452.266667z" fill="currentColor"></path>
          </svg>
        </span>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.c-alert {
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border-radius: var(--cf-border-radius);
  position: relative;
  background-color: var(--cf-color-surface);
  color: var(--cf-color-text);
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  border: 1px solid transparent;
  margin-bottom: 20px;
}

.c-alert__content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.c-alert__title {
  font-size: 14px;
  line-height: 24px;
}

.c-alert__title.is-bold {
  font-weight: 700;
}

.c-alert__description {
  font-size: 12px;
  margin: 5px 0 0 0;
}

.c-alert__close-btn {
  position: absolute;
  top: 12px;
  right: 15px;
  cursor: pointer;
  color: var(--cf-color-text-secondary);
  font-size: 12px;
  opacity: 0.7;
}

.c-alert__close-btn:hover {
  opacity: 1;
}

.c-alert.is-center {
  justify-content: center;
  text-align: center;
}

/* Colors */
/* Suya: Muted, natural colors */
[data-theme="suya"] .c-alert--success { background-color: #f0f9eb; color: #67c23a; border-color: #e1f3d8; }
[data-theme="suya"] .c-alert--warning { background-color: #fdf6ec; color: #e6a23c; border-color: #faecd8; }
[data-theme="suya"] .c-alert--info { background-color: #f4f4f5; color: #909399; border-color: #e9e9eb; }
[data-theme="suya"] .c-alert--error { background-color: #fef0f0; color: #f56c6c; border-color: #fde2e2; }

/* Huali: Richer, bordered, slightly decorative */
[data-theme="huali"] .c-alert {
  border-width: 1px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

[data-theme="huali"] .c-alert--success { 
  background-color: #f0f9eb; 
  color: #006400; 
  border-color: #006400;
}
[data-theme="huali"] .c-alert--warning { 
  background-color: #fdf6ec; 
  color: #B8860B; 
  border-color: #B8860B;
}
[data-theme="huali"] .c-alert--info { 
  background-color: #f4f4f5; 
  color: #555; 
  border-color: #888;
}
[data-theme="huali"] .c-alert--error { 
  background-color: #fff0f0; 
  color: #C23E3E; 
  border-color: #C23E3E;
}

/* Huali Dark Effect (Solid) */
[data-theme="huali"] .c-alert.is-dark.c-alert--success { background-color: #006400; color: #fff; }
[data-theme="huali"] .c-alert.is-dark.c-alert--warning { background-color: #B8860B; color: #fff; }
[data-theme="huali"] .c-alert.is-dark.c-alert--info { background-color: #555; color: #fff; }
[data-theme="huali"] .c-alert.is-dark.c-alert--error { background-color: #C23E3E; color: #fff; }

.cf-fade-in-linear-enter-active,
.cf-fade-in-linear-leave-active {
  transition: opacity 0.2s linear;
}
.cf-fade-in-linear-enter-from,
.cf-fade-in-linear-leave-to {
  opacity: 0;
}
</style>