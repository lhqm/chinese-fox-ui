<script setup lang="ts">
const props = defineProps<{
  title?: string;
  author?: string;
  content?: string;
  footer?: string;
}>();
</script>

<template>
  <div class="c-poem-card">
    <div class="c-poem-card__header">
      <h3 class="c-poem-card__title">{{ props.title || '题目' }}</h3>
      <div class="c-poem-card__author">{{ props.author || '' }}</div>
    </div>
    <div class="c-poem-card__content">
      <pre class="c-poem-card__text">{{ props.content || '' }}</pre>
    </div>
    <div v-if="props.footer" class="c-poem-card__footer">{{ props.footer }}</div>
    <div class="c-poem-card__corner c-poem-card__corner--tl"></div>
    <div class="c-poem-card__corner c-poem-card__corner--tr"></div>
    <div class="c-poem-card__corner c-poem-card__corner--bl"></div>
    <div class="c-poem-card__corner c-poem-card__corner--br"></div>
    <div class="cf-decor-corner tr"></div>
    <div class="cf-decor-corner bl"></div>
  </div>
</template>

<style scoped>
.c-poem-card {
  position: relative;
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  border-radius: 8px;
  box-shadow: var(--cf-shadow);
}
.c-poem-card__header {
  padding: 16px 16px 8px;
  border-bottom: 1px dashed var(--cf-color-border);
}
.c-poem-card__title {
  margin: 0;
  font-family: KaiTi, STKaiti, SimSun, Noto Serif SC, serif;
  font-size: 20px;
}
.c-poem-card__author {
  color: var(--cf-color-text-secondary);
  margin-top: 4px;
}
.c-poem-card__content {
  padding: 16px;
}
.c-poem-card__text {
  margin: 0;
  font-family: KaiTi, STKaiti, SimSun, Noto Serif SC, serif;
  white-space: pre-wrap;
  line-height: 1.8;
}
.c-poem-card__footer {
  padding: 12px 16px;
  border-top: 1px dashed var(--cf-color-border);
  color: var(--cf-color-text-secondary);
}
.c-poem-card__corner {
  position: absolute;
  width: 20px; height: 20px;
  background: transparent;
}
.c-poem-card__corner--tl { top: -2px; left: -2px; }
.c-poem-card__corner--tr { top: -2px; right: -2px; }
.c-poem-card__corner--bl { bottom: -2px; left: -2px; }
.c-poem-card__corner--br { bottom: -2px; right: -2px; }

/* Suya */
[data-theme="suya"] .c-poem-card {
  backdrop-filter: blur(6px);
  border: 1px dashed rgba(0,0,0,0.12);
}
[data-theme="suya"] .c-poem-card__corner {
  display: none;
}

/* Huali */
[data-theme="huali"] .c-poem-card {
  border: 2px solid var(--cf-color-primary);
  box-shadow: 0 6px 16px var(--cf-shadow);
}
[data-theme="huali"] .c-poem-card__corner {
  border: 3px solid var(--cf-color-primary);
  border-radius: 3px;
}
[data-theme="huali"] .c-poem-card__corner--tl { border-right: none; border-bottom: none; }
[data-theme="huali"] .c-poem-card__corner--tr { border-left: none; border-bottom: none; }
[data-theme="huali"] .c-poem-card__corner--bl { border-right: none; border-top: none; }
[data-theme="huali"] .c-poem-card__corner--br { border-left: none; border-top: none; }
</style>
