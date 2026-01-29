<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue', 'change']);

const toggle = () => {
  if (!props.disabled) {
    const next = !props.modelValue;
    emit('update:modelValue', next);
    emit('change', next);
  }
};
</script>

<template>
  <div 
    class="c-switch" 
    :class="{ 'is-checked': modelValue, 'is-disabled': disabled }"
    @click="toggle"
  >
    <div class="c-switch__track">
      <!-- Decoration for Huali (Pattern on track) -->
      <div class="c-switch__pattern"></div>
    </div>
    <div class="c-switch__handle">
      <!-- Decoration for Suya/Huali handle -->
      <span class="c-switch__icon" v-if="modelValue">✓</span>
      <span class="c-switch__icon" v-else>✕</span>
    </div>
  </div>
</template>

<style scoped>
.c-switch {
  display: inline-block;
  position: relative;
  width: 44px;
  height: 24px;
  cursor: pointer;
  vertical-align: middle;
  transition: var(--cf-transition);
}

.c-switch.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.c-switch__track {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: var(--cf-color-border);
  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;
}

.c-switch__handle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-switch__icon {
  font-size: 10px;
  color: #ccc;
  transform: scale(0.8);
}

.c-switch.is-checked .c-switch__handle {
  transform: translateX(20px);
}

.c-switch.is-checked .c-switch__icon {
  color: var(--cf-color-primary);
}

/* --- Suya Theme (Yin Yang / Ink) --- */
[data-theme="suya"] .c-switch__track {
  background-color: #e0e0e0;
}

[data-theme="suya"] .c-switch.is-checked .c-switch__track {
  background-color: var(--cf-color-primary); /* Dai Blue */
}

[data-theme="suya"] .c-switch__handle {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

[data-theme="suya"] .c-switch.is-checked .c-switch__handle {
  background-color: #fff;
}

/* --- Huali Theme (Festive Lantern) --- */
[data-theme="huali"] .c-switch__track {
  background-color: rgba(194, 62, 62, 0.08); /* Softer red */
  border: 1px solid var(--cf-color-primary);
}

[data-theme="huali"] .c-switch.is-checked .c-switch__track {
  background-color: var(--cf-color-primary); /* Red Lantern */
  box-shadow: 0 0 10px var(--cf-shadow-hover);
}

[data-theme="huali"] .c-switch__handle {
  background-color: #FFD700; /* Gold Handle */
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

[data-theme="huali"] .c-switch.is-checked .c-switch__handle {
  background-color: #fff; /* White light center */
  border: 2px solid #FFD700;
}
</style>
