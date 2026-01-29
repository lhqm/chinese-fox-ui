<script setup lang="ts">
defineProps<{
  modelValue?: string;
  placeholder?: string;
  label?: string;
  clearable?: boolean;
  type?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue', 'clear', 'focus', 'blur']);

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};

const handleClear = () => {
  emit('update:modelValue', '');
  emit('clear');
};

const handleFocus = (event: Event) => {
  emit('focus', event);
};

const handleBlur = (event: Event) => {
  emit('blur', event);
};
</script>

<template>
  <div class="c-input-wrapper">
    <label v-if="label" class="c-input-label">{{ label }}</label>
    <div class="c-input-container">
      <input 
        class="c-input"
        :class="{ 'is-clearable': clearable }"
        :value="modelValue"
        :placeholder="placeholder"
        :type="type || 'text'"
        :disabled="disabled"
        @input="updateValue"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <!-- Clear Icon -->
      <span 
        v-if="clearable && modelValue" 
        class="c-input__clear"
        @click="handleClear"
      >
        <svg viewBox="0 0 1024 1024" width="14" height="14">
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66.4 75.7L512 633.4 413 757.9l-66.4-75.7L450.4 576l-103.8-106.2 66.4-75.7L512 518.6l99-124.5 66.4 75.7L573.6 576l103.8 106.2z" fill="currentColor"></path>
        </svg>
      </span>

      <!-- Brush stroke underline for Suya -->
      <div class="c-input-ink-border"></div>
      <!-- Gold Frame for Huali -->
      <div class="c-input-gold-frame"></div>
    </div>
  </div>
</template>

<style scoped>
.c-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.c-input-label {
  font-family: var(--cf-font-family);
  color: var(--cf-color-text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 1px;
}

.c-input-container {
  position: relative;
}

.c-input {
  width: 100%;
  padding: 10px 12px;
  font-family: var(--cf-font-family);
  font-size: 1rem;
  color: var(--cf-color-text);
  background: transparent;
  border: none;
  outline: none;
  transition: var(--cf-transition);
  position: relative;
  z-index: 2;
}

.c-input.is-clearable {
  padding-right: 30px;
}

.c-input__clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--cf-color-text-secondary);
  cursor: pointer;
  z-index: 4;
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.c-input__clear:hover {
  opacity: 1;
}

/* --- Suya Theme (Ink Wash) --- */
[data-theme="suya"] .c-input {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.4);
}

[data-theme="suya"] .c-input-ink-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cf-color-primary), transparent);
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 3;
  opacity: 0.8;
  filter: blur(0.5px);
}

[data-theme="suya"] .c-input:focus ~ .c-input-ink-border {
  width: 100%;
}

[data-theme="suya"] .c-input:focus {
  background-color: rgba(255, 255, 255, 0.7);
}

/* --- Huali Theme (Festive / Red) --- */
[data-theme="huali"] .c-input {
  border: 1px solid var(--cf-color-primary); /* Red border */
  background-color: var(--cf-color-surface); /* White bg for clarity */
  color: var(--cf-color-text); /* Dark text */
  border-radius: 4px;
  box-shadow: inset 0 2px 4px var(--cf-shadow);
}

[data-theme="huali"] .c-input:focus {
  box-shadow: 0 0 8px var(--cf-shadow-hover);
}

[data-theme="huali"] .c-input-gold-frame {
  /* Renamed concept: Festive Corner Accent */
  position: absolute;
  pointer-events: none;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 3;
}

[data-theme="huali"] .c-input-gold-frame::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px;
  width: 10px; height: 10px;
  border-top: 2px solid var(--cf-color-primary);
  border-left: 2px solid var(--cf-color-primary);
}

[data-theme="huali"] .c-input-gold-frame::after {
  content: '';
  position: absolute;
  bottom: -2px; right: -2px;
  width: 10px; height: 10px;
  border-bottom: 2px solid var(--cf-color-primary);
  border-right: 2px solid var(--cf-color-primary);
}

[data-theme="huali"] .c-input:focus ~ .c-input-gold-frame::before,
[data-theme="huali"] .c-input:focus ~ .c-input-gold-frame::after {
  width: 100%;
  height: 100%;
  border-color: var(--cf-color-secondary); /* Turns Gold on focus */
  transition: all 0.4s ease;
}
</style>
