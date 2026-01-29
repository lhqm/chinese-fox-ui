<script setup lang="ts">
import { inject, computed } from 'vue';

const props = defineProps<{
  label?: string;
  prop?: string;
}>();

const formContext = inject<{
  labelWidth?: string;
  labelPosition?: string;
}>('formContext', {});

const labelStyle = computed(() => {
  if (formContext.labelPosition === 'top') return {};
  return {
    width: formContext.labelWidth || '80px',
    textAlign: formContext.labelPosition === 'left' ? 'left' : 'right'
  } as any;
});
</script>

<template>
  <div 
    class="c-form-item"
    :class="[`c-form-item--label-${formContext.labelPosition || 'right'}`]"
  >
    <label 
      v-if="label" 
      class="c-form-item__label"
      :style="labelStyle"
    >
      {{ label }}
    </label>
    <div class="c-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.c-form-item {
  display: flex;
  margin-bottom: 20px;
  font-family: var(--cf-font-family);
}

.c-form-item--label-top {
  display: block;
}

.c-form-item--label-top .c-form-item__label {
  display: block;
  margin-bottom: 8px;
  text-align: left;
}

.c-form-item__label {
  padding-right: 12px;
  color: var(--cf-color-text);
  line-height: 32px; /* Approx input height */
  box-sizing: border-box;
}

.c-form-item__content {
  flex: 1;
  position: relative;
  line-height: 32px;
}
</style>
