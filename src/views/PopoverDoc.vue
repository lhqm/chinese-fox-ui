<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CPopover from '../components/CPopover/CPopover.vue';

const propsData = [
  { name: 'title', desc: '标题', type: 'string', default: '-' },
  { name: 'placement', desc: '出现位置', type: 'top | bottom | left | right', default: 'bottom' },
  { name: 'trigger', desc: '触发方式', type: 'hover | click', default: 'click' },
  { name: 'width', desc: '宽度(px)', type: 'number', default: '260' },
  { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
  { name: 'offset', desc: '偏移距离(px)', type: 'number', default: '8' },
];

const eventsData = [
  { name: 'visible-change', desc: '显示状态变化', params: 'visible: boolean' },
];

const code = `
<CPopover title="说明" placement="bottom">
  <template #reference>
    <button>Bottom</button>
  </template>
  <template #content>
    <p>这里是弹出内容</p>
  </template>
</CPopover>
`;
</script>

<template>
  <CDoc 
    title="Popover 弹出框" 
    description="承载自定义内容的弹出框。素雅为磨砂气泡框，华丽为红框卷轴风格。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-row">
      <CPopover title="说明" placement="bottom">
        <template #reference>
          <button class="demo-btn">Bottom</button>
        </template>
        <template #content>
          <p>这里是弹出内容，支持较长文本，内部可滚动。</p>
          <p v-for="i in 20" :key="i">第 {{ i }} 行内容</p>
        </template>
      </CPopover>

      <CPopover title="提示" placement="right" trigger="hover">
        <template #reference>
          <button class="demo-btn">Hover</button>
        </template>
        <template #content>
          <ul>
            <li>可用来放菜单</li>
            <li>或编辑表单</li>
            <li>支持滚动</li>
          </ul>
        </template>
      </CPopover>
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
