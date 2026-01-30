<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CTooltip from '../components/CTooltip/CTooltip.vue';

const propsData = [
  { name: 'content', desc: '提示内容', type: 'string', default: '-' },
  { name: 'placement', desc: '出现位置', type: 'top | bottom | left | right', default: 'top' },
  { name: 'trigger', desc: '触发方式', type: 'hover | click', default: 'hover' },
  { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
  { name: 'offset', desc: '偏移距离(px)', type: 'number', default: '8' },
];

const code = `
<CTooltip content="上方提示" placement="top">
  <button>Top</button>
</CTooltip>
<CTooltip content="点击触发" trigger="click">
  <button>Click</button>
</CTooltip>
`;
</script>

<template>
  <CDoc 
    title="Tooltip 文字提示" 
    description="轻量提示信息。素雅为磨砂墨纸气泡，华丽为红框卷轴小气泡。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-row">
      <CTooltip content="上方提示" placement="top">
        <button class="demo-btn">Top</button>
      </CTooltip>

      <CTooltip content="下方提示" placement="bottom">
        <button class="demo-btn">Bottom</button>
      </CTooltip>

      <CTooltip content="左侧提示" placement="left">
        <button class="demo-btn">Left</button>
      </CTooltip>

      <CTooltip content="右侧提示" placement="right">
        <button class="demo-btn">Right</button>
      </CTooltip>

      <CTooltip content="点击触发" trigger="click">
        <button class="demo-btn">Click</button>
      </CTooltip>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.demo-btn {
  padding: 8px 12px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
  cursor: pointer;
  border-radius: 4px;
}
</style>
