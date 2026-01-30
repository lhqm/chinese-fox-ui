<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  slides: Array<{ label?: string; src?: string }>;
  height?: string;
}>();

const current = ref(0);
const height = props.height || '220px';

const next = () => {
  current.value = (current.value + 1) % props.slides.length;
};
const prev = () => {
  current.value = (current.value - 1 + props.slides.length) % props.slides.length;
};
</script>

<template>
  <div class="c-scroll-carousel" :style="{ height }">
    <div class="c-scroll-carousel__track" :style="{ transform: `translateX(-${current * 100}%)` }">
      <div class="c-scroll-carousel__slide" v-for="(s, i) in slides" :key="i">
        <div class="c-scroll-carousel__content" :style="s.src ? { backgroundImage: `url(${s.src})` } : {}">
          <span v-if="s.label" class="c-scroll-carousel__label">{{ s.label }}</span>
        </div>
      </div>
    </div>
    <button class="c-scroll-carousel__btn c-scroll-carousel__btn--prev" @click="prev">‹</button>
    <button class="c-scroll-carousel__btn c-scroll-carousel__btn--next" @click="next">›</button>
    <div class="c-scroll-carousel__dots">
      <span 
        v-for="(s, i) in slides" 
        :key="i" 
        class="c-scroll-carousel__dot" 
        :class="{ 'is-active': i === current }"
        @click="current = i"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.c-scroll-carousel {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--cf-color-border);
  border-radius: var(--cf-border-radius);
  background: var(--cf-color-surface);
}
.c-scroll-carousel__track {
  display: flex;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  height: 100%;
}
.c-scroll-carousel__slide {
  flex: 0 0 100%;
  height: 100%;
}
.c-scroll-carousel__content {
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c-scroll-carousel__label {
  padding: 6px 10px;
  border-radius: 4px;
  background: rgba(255,255,255,0.8);
  border: 1px solid var(--cf-color-border);
  color: var(--cf-color-text);
}
.c-scroll-carousel__btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: none;
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  cursor: pointer;
  border-radius: 50%;
}
.c-scroll-carousel__btn--prev { left: 8px; }
.c-scroll-carousel__btn--next { right: 8px; }
.c-scroll-carousel__dots {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
.c-scroll-carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cf-color-border);
  cursor: pointer;
}
.c-scroll-carousel__dot.is-active {
  background: var(--cf-color-primary);
}
[data-theme="suya"] .c-scroll-carousel {
  backdrop-filter: blur(6px);
}
[data-theme="huali"] .c-scroll-carousel {
  border: 1px solid var(--cf-color-primary);
  box-shadow: 0 6px 16px var(--cf-shadow);
}
</style>
