<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CMenu from '../components/CMenu/CMenu.vue';
import CMenuItem from '../components/CMenu/CMenuItem.vue';

const activeIndex = ref('1');
const activeIndex2 = ref('1');

const handleSelect = (index: string) => {
  console.log('Selected:', index);
};

const propsData = [
  { name: 'mode', desc: '模式 (Mode)', type: 'horizontal | vertical', default: 'horizontal' },
  { name: 'defaultActive', desc: '默认选中 (Default Active)', type: 'string', default: '-' },
];

const eventsData = [
  { name: 'select', desc: '菜单项被选择时触发', params: 'index: string' },
];

const itemPropsData = [
  { name: 'index', desc: '唯一标识 (Index)', type: 'string', default: '-' },
  { name: 'disabled', desc: '是否禁用 (Disabled)', type: 'boolean', default: 'false' },
];

const code = `
<CMenu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
  <CMenuItem index="1">处理中心</CMenuItem>
  <CMenuItem index="2">我的工作台</CMenuItem>
  <CMenuItem index="3" disabled>消息中心</CMenuItem>
</CMenu>
`;
</script>

<template>
  <CDoc 
    title="Menu 导航菜单" 
    description="为网站提供导航功能的菜单。素雅主题下为极简墨线，华丽主题下为匾额/屏风风格。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-section">
      <h3>顶栏 (Top Bar)</h3>
      <CMenu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <CMenuItem index="1">首页 (Home)</CMenuItem>
        <CMenuItem index="2">产品 (Products)</CMenuItem>
        <CMenuItem index="3">关于 (About)</CMenuItem>
        <CMenuItem index="4" disabled>禁用 (Disabled)</CMenuItem>
      </CMenu>
    </div>

    <div class="demo-section">
      <h3>侧栏 (Sidebar)</h3>
      <div style="width: 240px;">
        <CMenu :default-active="activeIndex2" mode="vertical" @select="handleSelect">
          <CMenuItem index="1">概览 (Overview)</CMenuItem>
          <CMenuItem index="2">配置 (Settings)</CMenuItem>
          <CMenuItem index="3">权限 (Permissions)</CMenuItem>
        </CMenu>
      </div>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section {
  margin-bottom: 40px;
}
.demo-section h3 {
  margin-bottom: 16px;
  font-size: 16px;
  color: var(--cf-color-text-secondary);
}
</style>
