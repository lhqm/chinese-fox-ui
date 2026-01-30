<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  text?: string;
  visible?: boolean;
  size?: number;
  type?: 'approval' | 'reject';
}>();

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
  (e: 'shown'): void;
}>();

const shown = ref(false);
const size = props.size ?? 120;
const type = props.type ?? 'approval';
const text = props.text ?? (type === 'approval' ? '已阅' : '驳回');

watch(() => props.visible, (v) => {
  if (v) {
    shown.value = true;
    emit('shown');
    setTimeout(() => emit('update:visible', false), 1200);
  }
});
</script>

<template>
  <div class="c-stamp" :style="{ width: size + 'px', height: size + 'px' }" v-show="props.visible || shown">
    <div class="c-stamp__shape" :class="[`c-stamp__shape--${type}`]" :style="{ width: size + 'px', height: size + 'px' }">
      <span class="c-stamp__text">{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
.c-stamp {
  position: relative;
  display: inline-block;
  animation: stamp-pop 260ms ease-out;
}
.c-stamp__shape {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-8deg);
  user-select: none;
}
.c-stamp__text {
  font-family: LiSu, SimLi, KaiTi, STKaiti, SimSun, Noto Serif SC, serif;
  font-weight: 700;
  letter-spacing: 2px;
}
.c-stamp__shape--approval {
  border: 6px solid var(--cf-color-primary);
  color: var(--cf-color-primary);
}
.c-stamp__shape--reject {
  border: 6px solid var(--cf-color-secondary);
  color: var(--cf-color-secondary);
}
[data-theme='suya'] .c-stamp__shape {
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  box-shadow: 0 4px 18px rgba(74,106,116,0.18);
}
[data-theme='huali'] .c-stamp__shape {
  background: #fff;
  box-shadow: 0 6px 24px rgba(194,62,62,0.25);
}
@keyframes stamp-pop {
  0% { transform: scale(0.8) rotate(-14deg); opacity: 0; }
  60% { transform: scale(1.06) rotate(-8deg); opacity: 1; }
  100% { transform: scale(1.0) rotate(-8deg); opacity: 1; }
}
</style>
