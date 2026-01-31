<script setup lang="ts">
const props = defineProps<{
  title?: string;
  time?: string;
  status?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}>();
</script>

<template>
  <div class="c-timeline-item" :class="[`is-${props.status || 'default'}`]">
    <span class="c-timeline-item__dot"></span>
    <div class="c-timeline-item__content">
      <div class="c-timeline-item__header">
        <span class="c-timeline-item__title">{{ props.title }}</span>
        <span v-if="props.time" class="c-timeline-item__time">{{ props.time }}</span>
      </div>
      <div class="c-timeline-item__body">
        <slot></slot>
      </div>
    </div>
  </div>
  </template>

<style scoped>
.c-timeline-item {
  position: relative;
  display: flex;
  align-items: flex-start;
}
.c-timeline-item__dot {
  position: absolute;
  left: -16px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--cf-color-border);
  box-shadow: 0 0 0 2px var(--cf-color-bg) inset;
}
.c-timeline-item__content {
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  border-radius: 8px;
  padding: 12px 14px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  flex: 1;
}
.c-timeline-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.c-timeline-item__title {
  font-weight: 600;
  color: var(--cf-color-text);
}
.c-timeline-item__time {
  font-size: 12px;
  color: var(--cf-color-text-secondary);
}
.c-timeline-item__body {
  color: var(--cf-color-text);
  font-size: 14px;
}

.c-timeline-item.is-primary .c-timeline-item__dot {
  background-color: var(--cf-color-primary);
}
.c-timeline-item.is-success .c-timeline-item__dot {
  background-color: #3fb950;
}
.c-timeline-item.is-warning .c-timeline-item__dot {
  background-color: #d29922;
}
.c-timeline-item.is-danger .c-timeline-item__dot {
  background-color: #e60012;
}

[data-theme="huali"] .c-timeline-item__content {
  border: 1px solid var(--cf-color-primary);
}
[data-theme="huali"] .c-timeline-item__dot {
  box-shadow: 0 0 0 2px #FFD700 inset;
}
</style>
