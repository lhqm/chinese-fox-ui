<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue?: number;
  totalPages: number;
  showNumbers?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}>();

const current = computed({
  get: () => Math.min(Math.max(props.modelValue ?? 1, 1), props.totalPages),
  set: (val: number) => {
    const v = Math.min(Math.max(val, 1), props.totalPages);
    emit('update:modelValue', v);
    emit('change', v);
  }
});

const canPrev = computed(() => current.value > 1);
const canNext = computed(() => current.value < props.totalPages);

const prev = () => {
  if (canPrev.value) current.value = current.value - 1;
};
const next = () => {
  if (canNext.value) current.value = current.value + 1;
};
const goTo = (page: number) => {
  current.value = page;
};
</script>

<template>
  <div class="c-scroll-pager" role="navigation" aria-label="Scroll Pager">
    <button class="c-scroll-pager__btn c-scroll-pager__btn--prev" :disabled="!canPrev" @click="prev">
      <span class="c-scroll-pager__edge c-scroll-pager__edge--left"></span>
      上一卷
    </button>

    <div class="c-scroll-pager__pages" :class="{ 'is-numeric': showNumbers !== false }">
      <template v-if="showNumbers !== false">
        <button 
          v-for="p in totalPages" 
          :key="p" 
          class="c-scroll-pager__page" 
          :class="{ 'is-active': p === current }"
          @click="goTo(p)"
        >
          {{ p }}
        </button>
      </template>
      <template v-else>
        <span class="c-scroll-pager__status">第 {{ current }} 卷 / 共 {{ totalPages }} 卷</span>
      </template>
    </div>

    <button class="c-scroll-pager__btn c-scroll-pager__btn--next" :disabled="!canNext" @click="next">
      下一卷
      <span class="c-scroll-pager__edge c-scroll-pager__edge--right"></span>
    </button>
  </div>
  </template>

<style scoped>
.c-scroll-pager {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
  border-radius: 10px;
  box-shadow: var(--cf-shadow);
  position: relative;
}

.c-scroll-pager__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-bg);
  color: var(--cf-color-text);
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
}
.c-scroll-pager__btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.c-scroll-pager__edge {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: radial-gradient(circle at 30% 30%, rgba(0,0,0,0.12), transparent 60%);
  border-radius: 50%;
}
.c-scroll-pager__edge--left {
  box-shadow: inset 6px 0 0 rgba(0,0,0,0.06);
}
.c-scroll-pager__edge--right {
  box-shadow: inset -6px 0 0 rgba(0,0,0,0.06);
}

.c-scroll-pager__pages {
  display: flex;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
  max-width: 520px;
  padding: 6px 8px;
  border-radius: 8px;
  background: var(--cf-color-bg);
}
.c-scroll-pager__pages::-webkit-scrollbar {
  height: 8px;
}

.c-scroll-pager__page {
  min-width: 32px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
  color: var(--cf-color-text);
  border-radius: 6px;
  cursor: pointer;
}
.c-scroll-pager__page.is-active {
  color: var(--cf-color-primary);
  border-color: var(--cf-color-primary);
  background: rgba(0,0,0,0.03);
}

.c-scroll-pager__status {
  font-size: 14px;
  color: var(--cf-color-text-secondary);
}

/* Suya Theme */
.c-scroll-pager {
  background: linear-gradient(180deg, rgba(74,106,116,0.06), transparent 40%);
}

/* Huali Theme */
[data-theme="huali"] .c-scroll-pager {
  border: 2px solid #E60012;
  background: #FCFAF2;
}
[data-theme="huali"] .c-scroll-pager__page.is-active {
  color: #B3000E;
  border-color: #E60012;
  background: rgba(230, 0, 18, 0.06);
}
[data-theme="huali"] .c-scroll-pager__btn {
  border-color: #E60012;
}
</style>
