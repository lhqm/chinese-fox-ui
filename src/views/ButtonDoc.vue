<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CButton from '../components/CButton/CButton.vue';

const propsData = [
  { name: 'variant', desc: '按钮变体 (Variant)', type: 'string', default: 'default' },
  { name: 'disabled', desc: '是否禁用 (Disabled)', type: 'boolean', default: 'false' },
  { name: 'loading', desc: '是否加载中 (Loading)', type: 'boolean', default: 'false' },
  { name: 'size', desc: '尺寸 (Size)', type: 'string', default: 'medium' },
];

const slotsData = [
  { name: 'default', desc: '按钮内容 (Content)' },
];

const eventsData = [
  { name: 'click', desc: '点击按钮时触发', params: 'event: MouseEvent' },
];

const code = `
<CButton>Default</CButton>
<CButton variant="primary">Primary</CButton>
<CButton variant="secondary">Secondary</CButton>
<CButton variant="success">Success</CButton>
<CButton variant="danger">Danger</CButton>
<CButton disabled>Disabled</CButton>
<CButton loading>Loading</CButton>
`;
</script>

<template>
  <CDoc 
    title="Button 按钮" 
    description="常用的操作按钮。素雅主题下为水墨风格，华丽主题下为金石/宫廷风格。"
    :props-data="propsData"
    :slots-data="slotsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-row">
      <CButton>Default</CButton>
      <CButton variant="primary">Primary</CButton>
      <CButton variant="secondary">Secondary</CButton>
      <CButton variant="success">Success</CButton>
      <CButton variant="danger">Danger</CButton>
      <CButton disabled>Disabled</CButton>
      <CButton loading>Loading</CButton>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>