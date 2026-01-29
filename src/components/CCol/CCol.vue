<script setup lang="ts">
import { computed, inject } from 'vue';

const props = defineProps<{
  span?: number;
  offset?: number;
}>();

const rowContext = inject<{ gutter?: number }>('rowContext', {});

const style = computed(() => {
  if (rowContext.gutter) {
    return {
      paddingLeft: `${rowContext.gutter / 2}px`,
      paddingRight: `${rowContext.gutter / 2}px`
    };
  }
  return {};
});

const classes = computed(() => {
  const classList: string[] = [];
  if (props.span) classList.push(`c-col-${props.span}`);
  if (props.offset) classList.push(`c-col-offset-${props.offset}`);
  return classList;
});
</script>

<template>
  <div 
    class="c-col"
    :class="classes"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.c-col {
  box-sizing: border-box;
  width: 100%;
}

/* Loop for 24 grid system would be better in SCSS/Less, but plain CSS here */
/* We'll implement a subset or use inline styles if we wanted dynamic, but classes are standard */
.c-col-1 { width: 4.16667%; }
.c-col-2 { width: 8.33333%; }
.c-col-3 { width: 12.5%; }
.c-col-4 { width: 16.66667%; }
.c-col-5 { width: 20.83333%; }
.c-col-6 { width: 25%; }
.c-col-7 { width: 29.16667%; }
.c-col-8 { width: 33.33333%; }
.c-col-9 { width: 37.5%; }
.c-col-10 { width: 41.66667%; }
.c-col-11 { width: 45.83333%; }
.c-col-12 { width: 50%; }
.c-col-13 { width: 54.16667%; }
.c-col-14 { width: 58.33333%; }
.c-col-15 { width: 62.5%; }
.c-col-16 { width: 66.66667%; }
.c-col-17 { width: 70.83333%; }
.c-col-18 { width: 75%; }
.c-col-19 { width: 79.16667%; }
.c-col-20 { width: 83.33333%; }
.c-col-21 { width: 87.5%; }
.c-col-22 { width: 91.66667%; }
.c-col-23 { width: 95.83333%; }
.c-col-24 { width: 100%; }

.c-col-offset-1 { margin-left: 4.16667%; }
.c-col-offset-2 { margin-left: 8.33333%; }
.c-col-offset-3 { margin-left: 12.5%; }
.c-col-offset-4 { margin-left: 16.66667%; }
.c-col-offset-6 { margin-left: 25%; }
.c-col-offset-8 { margin-left: 33.33333%; }
.c-col-offset-12 { margin-left: 50%; }
</style>