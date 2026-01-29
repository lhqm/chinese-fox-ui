<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CDivider from '../components/CDivider/CDivider.vue';

const propsData = [
  { name: 'direction', desc: '方向 (Direction)', type: 'horizontal | vertical', default: 'horizontal' },
  { name: 'contentPosition', desc: '内容位置 (Content Position)', type: 'left | center | right', default: 'center' },
  { name: 'borderStyle', desc: '边框样式 (Border Style)', type: 'solid | dashed | dotted', default: 'solid' },
];

const code = `
<p>Text</p>
<CDivider />
<p>Text</p>
<CDivider>With Content</CDivider>
<CDivider content-position="left">Left</CDivider>
<CDivider content-position="right">Right</CDivider>

<span>Text</span>
<CDivider direction="vertical" />
<span>Text</span>
`;
</script>

<template>
  <CDoc 
    title="Divider 分割线" 
    description="区隔内容的分割线。素雅主题下为水墨渐变，华丽主题下为红色/金色渐隐线。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-section">
      <p>基础用法 (Basic)</p>
      <CDivider />
      <p>带内容 (With Content)</p>
      <CDivider>分割线 (Divider)</CDivider>
      
      <p>内容位置 (Position)</p>
      <CDivider content-position="left">左侧 (Left)</CDivider>
      <CDivider content-position="right">右侧 (Right)</CDivider>

      <p>垂直分割 (Vertical)</p>
      <div>
        <span>文字 (Text)</span>
        <CDivider direction="vertical" />
        <span>文字 (Text)</span>
        <CDivider direction="vertical" />
        <span>文字 (Text)</span>
      </div>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section {
  color: var(--cf-color-text);
}
</style>
