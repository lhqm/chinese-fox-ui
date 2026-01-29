<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CTag from '../components/CTag/CTag.vue';

const propsData = [
  { name: 'type', desc: '标签类型 (Type)', type: 'default | primary | success | warning | danger', default: 'default' },
  { name: 'effect', desc: '主题风格 (Effect)', type: 'light | dark | plain', default: 'light' },
  { name: 'closable', desc: '是否可关闭', type: 'boolean', default: 'false' },
];

const eventsData = [
  { name: 'click', desc: '点击 Tag 时触发', params: 'event' },
  { name: 'close', desc: '关闭 Tag 时触发', params: 'event' },
];

const slotsData = [
  { name: 'default', desc: '标签内容 (Content)' },
];

const code = `
<!-- Light Effect (Default) -->
<CTag>Default</CTag>
<CTag type="primary">Primary</CTag>
<CTag type="success">Success</CTag>
<CTag type="warning">Warning</CTag>
<CTag type="danger">Danger</CTag>

<!-- Dark Effect -->
<CTag effect="dark" type="primary">Dark Primary</CTag>
<CTag effect="dark" type="success">Dark Success</CTag>

<!-- Plain Effect -->
<CTag effect="plain" type="warning">Plain Warning</CTag>
<CTag effect="plain" type="danger">Plain Danger</CTag>
`;
</script>

<template>
  <CDoc 
    title="Tag 标签" 
    description="用于标记和选择。素雅主题下为印章风格，华丽主题下为带玉佩/中国结元素的装饰风格。"
    :props-data="propsData"
    :slots-data="slotsData"
    :code="code"
  >
    <div class="demo-section">
      <h3>Light (Default)</h3>
      <div class="demo-row">
        <CTag>Default</CTag>
        <CTag type="primary">Primary</CTag>
        <CTag type="success">Success</CTag>
        <CTag type="warning">Warning</CTag>
        <CTag type="danger">Danger</CTag>
      </div>
    </div>

    <div class="demo-section">
      <h3>Dark</h3>
      <div class="demo-row">
        <CTag effect="dark">Default</CTag>
        <CTag effect="dark" type="primary">Primary</CTag>
        <CTag effect="dark" type="success">Success</CTag>
        <CTag effect="dark" type="warning">Warning</CTag>
        <CTag effect="dark" type="danger">Danger</CTag>
      </div>
    </div>

    <div class="demo-section">
      <h3>Plain</h3>
      <div class="demo-row">
        <CTag effect="plain">Default</CTag>
        <CTag effect="plain" type="primary">Primary</CTag>
        <CTag effect="plain" type="success">Success</CTag>
        <CTag effect="plain" type="warning">Warning</CTag>
        <CTag effect="plain" type="danger">Danger</CTag>
      </div>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section {
  margin-bottom: 20px;
}
.demo-section h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--cf-color-text-secondary);
}
.demo-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
