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
  position: relative;
  z-index: 1;
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
  z-index: 1;
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
  background: radial-gradient(circle at 50% 50%, var(--cf-color-primary) 50%, rgba(0,0,0,0.2) 51%);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46); 
  z-index: 2;
}

/* Suya Ink Ring */
.c-radio__inner::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid var(--cf-color-primary);
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
  transition: opacity 0.2s ease, transform 0.2s ease;
  filter: blur(0.4px);
  z-index: 1;
}

/* Checked State - Suya */
.c-radio--checked .c-radio__inner {
  border-color: var(--cf-color-primary);
}

.c-radio--checked .c-radio__inner::after {
  transform: translate(-50%, -50%) scale(1);
}

.c-radio--checked .c-radio__inner::before {
  opacity: 0.6;
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
  background-color: var(--cf-color-primary); /* Vermilion */
  width: 10px;
  height: 10px;
  box-shadow: 0 0 6px rgba(194, 62, 62, 0.4);
}

/* Checked State - Huali */
[data-theme="huali"] .c-radio--checked .c-radio__inner {
  border-color: #FFD700; /* Gold Border when checked */
  background-color: #FFF8E7;
  box-shadow: 0 0 5px rgba(255, 215, 0, 0.4);
}

[data-theme="suya"] .c-radio__inner {
  background-color: #fff;
  border: 2px solid var(--cf-color-border);
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}

[data-theme="suya"] .c-radio--checked .c-radio__inner {
  border-color: var(--cf-color-primary);
  box-shadow: 0 0 4px rgba(74,106,116,0.25);
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
