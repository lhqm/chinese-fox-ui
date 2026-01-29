<script setup lang="ts">
import { ref, provide, watch } from 'vue';

const props = defineProps<{
  modelValue?: string | string[];
  accordion?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void;
  (e: 'change', value: string | string[]): void;
}>();

// Ensure activeNames is always an array for internal logic
const activeNames = ref<string[]>(
  Array.isArray(props.modelValue) ? props.modelValue : (props.modelValue ? [props.modelValue] : [])
);

watch(() => props.modelValue, (val) => {
  activeNames.value = Array.isArray(val) ? val : (val ? [val] : []);
});

const handleItemClick = (name: string) => {
  if (props.accordion) {
    activeNames.value = activeNames.value.includes(name) && activeNames.value[0] === name ? [] : [name];
  } else {
    const index = activeNames.value.indexOf(name);
    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(name);
    }
  }
  
  const value = props.accordion ? activeNames.value[0] || '' : activeNames.value;
  emit('update:modelValue', value);
  emit('change', value);
};

provide('collapseContext', {
  activeNames,
  handleItemClick
});
</script>

<template>
  <div class="c-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
.c-collapse {
  border-top: 1px solid var(--cf-color-border);
  border-bottom: 1px solid var(--cf-color-border);
}

[data-theme="huali"] .c-collapse {
  border: none;
  border-radius: 8px;
  overflow: hidden;
}
</style>