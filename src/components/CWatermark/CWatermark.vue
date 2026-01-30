<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  content?: string;
  gapX?: number;
  gapY?: number;
  rotate?: number;
  opacity?: number;
  fontSize?: number;
  zIndex?: number;
}>();

const text = computed(() => props.content || 'Chinese Fox UI');
const gapX = computed(() => props.gapX ?? 100);
const gapY = computed(() => props.gapY ?? 80);
const rotate = computed(() => props.rotate ?? -20);
const opacity = computed(() => props.opacity ?? 0.12);
const fontSize = computed(() => props.fontSize ?? 14);
const zIndex = computed(() => props.zIndex ?? 1);

const svgDataUrl = computed(() => {
  const fill = 'currentColor';
  const encoded = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='120' viewBox='0 0 200 120'>
      <g fill='${fill}' opacity='${opacity.value}' transform='rotate(${rotate.value},100,60)'>
        <text x='100' y='70' text-anchor='middle' font-size='${fontSize.value}' font-family='KaiTi, STKaiti, SimSun, Noto Serif SC, serif'>${text.value}</text>
      </g>
    </svg>`
  );
  return `url("data:image/svg+xml,${encoded}")`;
});
</script>

<template>
  <div class="c-watermark">
    <slot></slot>
    <div class="c-watermark__overlay" :style="{
      backgroundImage: svgDataUrl,
      backgroundSize: `${gapX}px ${gapY}px`,
      zIndex: zIndex
    }"></div>
  </div>
</template>

<style scoped>
.c-watermark {
  position: relative;
}
.c-watermark__overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-repeat: repeat;
  color: var(--cf-color-text);
}
[data-theme='suya'] .c-watermark__overlay {
  color: rgba(74,106,116,0.6);
}
[data-theme='huali'] .c-watermark__overlay {
  color: rgba(194,62,62,0.5);
}
</style>
