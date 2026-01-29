<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue?: string | number | boolean;
  value?: string | number | boolean;
  label?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void;
  (e: 'change', value: string | number | boolean): void;
}>();

const isChecked = computed(() => props.modelValue === props.value);

const handleClick = () => {
  if (!props.disabled && !isChecked.value) {
    emit('update:modelValue', props.value!);
    emit('change', props.value!);
  }
};
</script>

<template>
  <div 
    class="c-radio" 
    :class="{ 
      'c-radio--checked': isChecked, 
      'c-radio--disabled': disabled 
    }"
    @click="handleClick"
  >
    <span class="c-radio__input">
      <span class="c-radio__inner"></span>
    </span>
    <span v-if="label || $slots.default" class="c-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style scoped>
.c-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: 16px;
  font-family: var(--cf-font-family);
  color: var(--cf-color-text);
  transition: all 0.3s ease;
}

.c-radio--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.c-radio__input {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

/* --- Suya Theme (Ink / Minimalist) --- */
.c-radio__inner {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid var(--cf-color-border);
  background-color: transparent;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-sizing: border-box;
  position: relative;
}

/* Suya Dot */
.c-radio__inner::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--cf-color-primary);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46); 
}

/* Checked State - Suya */
.c-radio--checked .c-radio__inner {
  border-color: var(--cf-color-primary);
}

.c-radio--checked .c-radio__inner::after {
  transform: translate(-50%, -50%) scale(1);
}

/* Hover Effect - Suya */
.c-radio:not(.c-radio--disabled):hover .c-radio__inner {
  border-color: var(--cf-color-primary);
}

/* --- Huali Theme (Imperial / Gold / Jewel) --- */
[data-theme="huali"] .c-radio__inner {
  border: 2px solid #E60012;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* Huali Jewel Dot */
[data-theme="huali"] .c-radio__inner::after {
  background-color: #E60012; /* Red Jewel */
  width: 10px;
  height: 10px;
  box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
}

/* Checked State - Huali */
[data-theme="huali"] .c-radio--checked .c-radio__inner {
  border-color: #FFD700; /* Gold Border when checked */
  background-color: #FFF8E7;
  box-shadow: 0 0 5px rgba(255, 215, 0, 0.4);
}

[data-theme="huali"] .c-radio__label {
  color: #B3000E;
  font-weight: 500;
}

/* Huali Hover */
[data-theme="huali"] .c-radio:not(.c-radio--disabled):hover .c-radio__inner {
  border-color: #FFD700;
  box-shadow: 0 0 4px #FFD700;
}
</style>