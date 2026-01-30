<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { Teleport } from 'vue';

const props = defineProps<{
  show: boolean;
  toTheme: 'suya' | 'huali';
  poem?: string;
  iconSrc?: string;
  durationMs?: number;
}>();

const emit = defineEmits(['finish']);

const progress = ref(0);

watch(() => props.show, (v) => {
  if (v) start();
});

const start = () => {
  progress.value = 0;
  const total = props.durationMs ?? 1200;
  const step = 16;
  const timer = setInterval(() => {
    progress.value = Math.min(progress.value + (step / total) * 100, 100);
    if (progress.value >= 100) {
      clearInterval(timer);
      emit('finish');
    }
  }, step);
};

onMounted(() => {
  if (props.show) start();
});
</script>

<template>
  <Teleport to="body">
    <div v-show="show" class="theme-trans" :class="toTheme === 'suya' ? 'theme-trans--to-suya' : 'theme-trans--to-huali'">
      <div class="theme-trans__glass"></div>
      <div class="theme-trans__curtain"></div>
      <div class="theme-trans__poem">{{ poem }}</div>
      <div class="theme-trans__progress">
        <div class="theme-trans__bar" :style="{ width: progress + '%' }"></div>
        <img v-if="iconSrc" class="theme-trans__icon" :src="iconSrc" :style="{ left: `calc(${progress}% - 18px)` }" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.theme-trans { }
.theme-trans__glass { }
.theme-trans__curtain { }
.theme-trans__poem { }
.theme-trans__progress { }
.theme-trans__bar { }
.theme-trans__icon { }
</style>
