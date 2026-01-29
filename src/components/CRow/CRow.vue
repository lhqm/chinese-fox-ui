<script setup lang="ts">
import { computed, provide } from 'vue';

const props = defineProps<{
  gutter?: number;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom';
}>();

const style = computed(() => {
  if (props.gutter) {
    return {
      marginLeft: `-${props.gutter / 2}px`,
      marginRight: `-${props.gutter / 2}px`
    };
  }
  return {};
});

provide('rowContext', {
  gutter: props.gutter
});
</script>

<template>
  <div 
    class="c-row"
    :style="style"
    :class="[
      justify ? `is-justify-${justify}` : '',
      align ? `is-align-${align}` : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.c-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.c-row::after {
  clear: both;
}

/* Justify */
.is-justify-center { justify-content: center; }
.is-justify-end { justify-content: flex-end; }
.is-justify-space-between { justify-content: space-between; }
.is-justify-space-around { justify-content: space-around; }

/* Align */
.is-align-middle { align-items: center; }
.is-align-bottom { align-items: flex-end; }
</style>