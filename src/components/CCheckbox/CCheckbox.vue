<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const isChecked = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
    emit('change', val);
  },
});

const handleClick = () => {
  if (!props.disabled) {
    isChecked.value = !isChecked.value;
  }
};
</script>

<template>
  <div 
    class="c-checkbox" 
    :class="{ 
      'c-checkbox--checked': isChecked, 
      'c-checkbox--disabled': disabled 
    }"
    @click="handleClick"
  >
    <span class="c-checkbox__input">
      <span class="c-checkbox__inner"></span>
    </span>
    <span v-if="label || $slots.default" class="c-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style scoped>
.c-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: 16px;
  font-family: var(--cf-font-family);
  color: var(--cf-color-text);
  transition: all 0.3s ease;
}

.c-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.c-checkbox__input {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

/* --- Suya Theme (Ink / Minimalist) --- */
.c-checkbox__inner {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid var(--cf-color-border);
  background-color: transparent;
  transition: all 0.3s ease;
  border-radius: 2px;
  box-sizing: border-box;
}

/* Suya Check Mark (Ink Stroke Style) */
.c-checkbox__inner::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 5px;
  width: 6px;
  height: 10px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0);
  transition: transform 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46); 
}

/* Checked State - Suya */
.c-checkbox--checked .c-checkbox__inner {
  background-color: var(--cf-color-primary);
  border-color: var(--cf-color-primary);
}

.c-checkbox--checked .c-checkbox__inner::after {
  transform: rotate(45deg) scale(1);
}

/* Hover Effect - Suya */
.c-checkbox:not(.c-checkbox--disabled):hover .c-checkbox__inner {
  border-color: var(--cf-color-primary);
}

/* --- Huali Theme (Festive / Gold / Ornate) --- */
[data-theme="huali"] .c-checkbox__inner {
  border: 2px solid var(--cf-color-primary);
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* Huali Check Mark (Gold Tick) */
[data-theme="huali"] .c-checkbox__inner::after {
  border-color: var(--cf-color-secondary); /* Gold Tick */
  border-width: 3px;
  top: 1px;
  left: 5px;
}

/* Checked State - Huali */
[data-theme="huali"] .c-checkbox--checked .c-checkbox__inner {
  background-color: var(--cf-color-primary); /* Red Background */
  border-color: var(--cf-color-primary);
  box-shadow: 0 0 5px var(--cf-shadow-hover);
}

/* Huali Label */
[data-theme="huali"] .c-checkbox__label {
  color: var(--cf-color-text); /* Dark Red Text */
  font-weight: 500;
}

/* Huali Hover */
[data-theme="huali"] .c-checkbox:not(.c-checkbox--disabled):hover .c-checkbox__inner {
  border-color: var(--cf-color-secondary);
  box-shadow: 0 0 4px var(--cf-color-secondary);
}

/* Corner Accents for Huali Checkbox (Tiny details) */
[data-theme="huali"] .c-checkbox__input::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  border: 1px solid transparent;
  transition: all 0.3s;
  pointer-events: none;
}
</style>
