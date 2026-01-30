<script setup lang="ts">
const props = defineProps<{
  leftText?: string;
  rightText?: string;
  fixed?: boolean;
}>();
</script>

<template>
  <Teleport v-if="fixed" to="body">
    <div class="c-couplet-banner is-fixed">
      <div class="c-couplet-banner__item c-couplet-banner__item--left">
        <span class="c-couplet-banner__text">{{ leftText || '春风得意' }}</span>
      </div>
      <div class="c-couplet-banner__item c-couplet-banner__item--right">
        <span class="c-couplet-banner__text">{{ rightText || '万象更新' }}</span>
      </div>
    </div>
  </Teleport>
  <div v-else class="c-couplet-banner">
    <div class="c-couplet-banner__item c-couplet-banner__item--left">
      <span class="c-couplet-banner__text">{{ leftText || '春风得意' }}</span>
    </div>
    <div class="c-couplet-banner__item c-couplet-banner__item--right">
      <span class="c-couplet-banner__text">{{ rightText || '万象更新' }}</span>
    </div>
  </div>
</template>

<style scoped>
.c-couplet-banner {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.c-couplet-banner.is-fixed {
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  pointer-events: none;
}
.c-couplet-banner__item {
  width: 120px;
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
}
.c-couplet-banner__text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 18px;
  letter-spacing: 2px;
  font-family: KaiTi, STKaiti, SimSun, Noto Serif SC, serif;
}
[data-theme="suya"] .c-couplet-banner__item {
  backdrop-filter: blur(6px);
  border: 1px dashed rgba(0,0,0,0.1);
}
[data-theme="huali"] .c-couplet-banner__item {
  border: 2px solid var(--cf-color-primary);
  box-shadow: 0 6px 16px var(--cf-shadow);
}
[data-theme="huali"] .c-couplet-banner__text {
  color: var(--cf-color-primary);
}
</style>
