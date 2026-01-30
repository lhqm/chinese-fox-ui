<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CWatermark from '../components/CWatermark/CWatermark.vue';

const propsData = [
  { name: 'content', desc: '水印文字', type: 'string', default: 'Chinese Fox UI' },
  { name: 'gapX', desc: '横向间距(px)', type: 'number', default: '100' },
  { name: 'gapY', desc: '纵向间距(px)', type: 'number', default: '80' },
  { name: 'rotate', desc: '旋转角度', type: 'number', default: '-20' },
  { name: 'opacity', desc: '透明度', type: 'number', default: '0.12' },
  { name: 'fontSize', desc: '字体大小(px)', type: 'number', default: '14' },
  { name: 'zIndex', desc: '层级', type: 'number', default: '1' },
];

const code = `
<CWatermark content="机密 Confidential" :gap-x="140" :gap-y="100" :rotate="-25" :opacity="0.12">
  <div style="padding: 20px; min-height: 160px;">内容区域</div>
</CWatermark>
`;
</script>

<template>
  <CDoc 
    title="Watermark 水印" 
    description="为区域添加重复文字水印，支持主题风格与参数控制。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-box">
      <CWatermark content="机密 Confidential" :gap-x="140" :gap-y="100" :rotate="-25" :opacity="0.12">
        <div class="box-content">
          <p>此区域添加了水印，用于版权或保密标示。</p>
          <p>支持调节密度、旋转角度、透明度与字体大小。</p>
        </div>
      </CWatermark>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-box {
  border: 1px solid var(--cf-color-border);
  border-radius: 8px;
  background: var(--cf-color-surface);
}
.box-content {
  padding: 20px;
  min-height: 160px;
}
</style>
