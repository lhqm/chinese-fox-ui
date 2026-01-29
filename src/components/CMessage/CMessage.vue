<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  type?: 'success' | 'warning' | 'info' | 'error';
  message?: string;
  duration?: number;
  onClose?: () => void;
  top?: number;
}>();

const visible = ref(false);
const topOffset = ref(props.top || 20);

onMounted(() => {
  visible.value = true;
  if (props.duration !== 0) {
    setTimeout(() => {
      handleClose();
    }, props.duration || 3000);
  }
});

const handleClose = () => {
  visible.value = false;
  setTimeout(() => {
    if (props.onClose) props.onClose();
  }, 300); // Wait for transition
};
</script>

<template>
  <Transition name="cf-message-fade">
    <div 
      v-show="visible"
      class="c-message"
      :class="[`c-message--${type || 'info'}`]"
      :style="{ top: `${topOffset}px` }"
    >
      <span class="c-message__content">{{ message }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.c-message {
  min-width: 300px;
  padding: 10px 16px;
  border-radius: 4px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  font-size: 14px;
}

/* Types */
.c-message--success { background-color: #f0f9eb; color: #67c23a; border: 1px solid #e1f3d8; }
.c-message--warning { background-color: #fdf6ec; color: #e6a23c; border: 1px solid #faecd8; }
.c-message--info { background-color: #f4f4f5; color: #909399; border: 1px solid #e9e9eb; }
.c-message--error { background-color: #fef0f0; color: #f56c6c; border: 1px solid #fde2e2; }

/* Huali Overrides */
[data-theme="huali"] .c-message--success { color: #006400; border-color: #006400; background-color: #fff; }
[data-theme="huali"] .c-message--error { color: var(--cf-color-primary); border-color: var(--cf-color-primary); background-color: #fff; }

.cf-message-fade-enter-from,
.cf-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
