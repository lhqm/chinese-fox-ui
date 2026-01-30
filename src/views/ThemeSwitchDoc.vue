<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import { ref } from 'vue';
import { useTheme } from '../composables/useTheme';

const { theme } = useTheme();
</script>

<template>
  <CDoc
    title="ThemeTransition 主题切换动画"
    description="采用纸帘下落的轻柔过渡效果，伴随诗句淡入与细线进度条，器物图标沿线轻移，避免强烈闪烁。"
  >
    <div class="doc-text">
      <p>切换至素雅：黑墨泼染，江湖气诗句，灰白兵器图标推进。</p>
      <p>切换至华丽：赤墨泼染，市井气诗句，红色乐器图标推进。</p>
      <p>在右上角切换主题即可体验动画。</p>
      <p>当前主题：{{ theme }}</p>
    </div>
  </CDoc>
</template>

<style scoped>
.doc-text {
  color: var(--cf-color-text);
  line-height: 1.8;
}
</style>
