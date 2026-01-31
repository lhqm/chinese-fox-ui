<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CBackTop from '../components/CBackTop/CBackTop.vue';
</script>

<template>
  <CDoc 
    title="BackTop 回到顶部" 
    description="支持挂载到指定容器或全局窗口，超过指定高度显示。"
    :props-data="[
      { name: 'target', desc: '选择器目标', type: 'string', default: '-' },
      { name: 'visibilityHeight', desc: '显示阈值(px)', type: 'number', default: '200' },
      { name: 'right', desc: '右侧偏移(px)', type: 'number', default: '24' },
      { name: 'bottom', desc: '底部偏移(px)', type: 'number', default: '24' }
    ]"
  >
    <div class="demo-section">
      <div class="container" id="bt-container">
        <div class="long">
          <p>容器内滚动示例</p>
          <p v-for="n in 20" :key="n">内容 {{ n }}</p>
        </div>
        <CBackTop target="#bt-container" :visibilityHeight="80" :right="10" :bottom="10" text="回顶" />
      </div>
    </div>
    <div class="demo-section">
      <p>全局窗口滚动示例</p>
      <p style="height: 600px"></p>
      <CBackTop :visibilityHeight="200" />
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section { margin-bottom: 24px; }
.container {
  height: 200px;
  border: 1px solid var(--cf-color-border);
  border-radius: 8px;
  overflow: auto;
  position: relative;
}
.long { padding: 12px; }
</style>
