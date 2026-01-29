<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface Option {
  label: string;
  value: string | number;
}

const props = defineProps<{
  modelValue?: string | number;
  options: Option[];
  placeholder?: string;
}>();

const emit = defineEmits(['update:modelValue', 'change', 'visible-change']);

const isOpen = ref(false);
const selectRef = ref<HTMLElement | null>(null);

const selectedLabel = computed(() => {
  const selected = props.options.find(opt => opt.value === props.modelValue);
  return selected ? selected.label : '';
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  emit('visible-change', isOpen.value);
};

const selectOption = (option: Option) => {
  emit('update:modelValue', option.value);
  emit('change', option.value);
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="c-select" :class="{ 'is-open': isOpen }" ref="selectRef">
    <div class="c-select__trigger" @click="toggleDropdown">
      <span v-if="selectedLabel" class="c-select__value">{{ selectedLabel }}</span>
      <span v-else class="c-select__placeholder">{{ placeholder || '请选择' }}</span>
      <span class="c-select__arrow">▼</span>
    </div>

    <Transition name="select-fade">
      <div v-if="isOpen" class="c-select__dropdown">
        <div 
          v-for="option in options" 
          :key="option.value" 
          class="c-select__option"
          :class="{ 'is-selected': modelValue === option.value }"
          @click="selectOption(option)"
        >
          <span class="c-select__option-text">{{ option.label }}</span>
          <!-- Decoration for Huali -->
          <span class="c-select__option-icon" v-if="modelValue === option.value">✦</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.c-select {
  position: relative;
  width: 100%;
  min-width: 200px;
  font-family: var(--cf-font-family);
}

.c-select__trigger {
  padding: 10px 12px;
  border: 1px solid var(--cf-color-border);
  border-radius: var(--cf-border-radius);
  background: var(--cf-color-surface);
  color: var(--cf-color-text);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--cf-transition);
  position: relative;
  z-index: 2;
}

/* Suya Trigger */
[data-theme="suya"] .c-select__trigger {
  border: 1px solid rgba(0,0,0,0.1);
  background: rgba(255,255,255,0.6);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* Huali Trigger */
[data-theme="huali"] .c-select__trigger {
  background: #fff;
  border: 1px solid var(--cf-color-primary);
  color: var(--cf-color-primary);
  box-shadow: 0 2px 4px var(--cf-shadow);
}

[data-theme="huali"] .c-select__trigger:hover {
  box-shadow: 0 0 8px var(--cf-shadow-hover);
}

.c-select__placeholder {
  color: var(--cf-color-text-secondary);
  opacity: 0.7;
}

[data-theme="huali"] .c-select__placeholder {
  color: #8b7d6b;
}

.c-select__arrow {
  font-size: 0.8em;
  transition: transform 0.3s ease;
  color: var(--cf-color-text-secondary);
}

[data-theme="huali"] .c-select__arrow {
  color: #E60012;
}

.c-select.is-open .c-select__arrow {
  transform: rotate(180deg);
}

.c-select__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 8px;
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  border-radius: var(--cf-border-radius);
  box-shadow: var(--cf-shadow-hover);
  z-index: 100;
  overflow: hidden;
  max-height: 250px;
  overflow-y: auto;
}

/* Suya Dropdown */
[data-theme="suya"] .c-select__dropdown {
  border: 1px solid rgba(0,0,0,0.05);
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

/* Huali Dropdown */
[data-theme="huali"] .c-select__dropdown {
  background: #fff;
  border: 1px solid var(--cf-color-primary);
  box-shadow: 0 4px 12px var(--cf-shadow);
  border-radius: 4px;
  overflow: hidden;
}

.c-select__option {
  padding: 10px 12px;
  cursor: pointer;
  transition: var(--cf-transition);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Suya Option */
[data-theme="suya"] .c-select__option:hover {
  background-color: rgba(0,0,0,0.03);
  color: var(--cf-color-primary);
}

[data-theme="suya"] .c-select__option.is-selected {
  background-color: rgba(var(--cf-color-primary-rgb), 0.1);
  color: var(--cf-color-primary);
  font-weight: 600;
}

/* Huali Option */
[data-theme="huali"] .c-select__option {
  color: #2c3e50;
  border-bottom: 1px dashed var(--cf-color-border);
}

[data-theme="huali"] .c-select__option:hover,
[data-theme="huali"] .c-select__option.is-selected {
  background: rgba(230, 0, 18, 0.05);
  color: var(--cf-color-primary);
}

.c-select__option-icon {
  font-size: 12px;
}

/* Transitions */
.select-fade-enter-active,
.select-fade-leave-active {
  transition: all 0.3s ease;
}

.select-fade-enter-from,
.select-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
