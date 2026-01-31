<script setup lang="ts">
defineProps<{
  reverse?: boolean;
}>();
</script>

<template>
  <div class="c-timeline" :class="{ 'is-reverse': reverse }">
    <slot></slot>
  </div>
</template>

<style scoped>
.c-timeline {
  position: relative;
  padding-left: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.c-timeline::before {
  content: "";
  position: absolute;
  left: 12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--cf-color-border), transparent);
}
.c-timeline.is-reverse {
  flex-direction: column-reverse;
}

[data-theme="huali"] .c-timeline::before {
  background: linear-gradient(180deg, #E60012, #FFD700);
}
</style>
