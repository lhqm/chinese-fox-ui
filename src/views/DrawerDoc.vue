<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CDrawer from '../components/CDrawer/CDrawer.vue';
import CButton from '../components/CButton/CButton.vue';

const drawer = ref(false);
const drawer2 = ref(false);
const direction = ref<'rtl' | 'ltr' | 'ttb' | 'btt'>('rtl');

const openDrawer = (dir: 'rtl' | 'ltr' | 'ttb' | 'btt') => {
  direction.value = dir;
  drawer.value = true;
};

const propsData = [
  { name: 'modelValue', desc: '是否显示 (Visible)', type: 'boolean', default: 'false' },
  { name: 'title', desc: '标题 (Title)', type: 'string', default: '-' },
  { name: 'direction', desc: '方向 (Direction)', type: 'rtl | ltr | ttb | btt', default: 'rtl' },
  { name: 'size', desc: '尺寸 (Size)', type: 'string', default: '30%' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '显示状态改变时触发', params: 'visible: boolean' },
  { name: 'close', desc: '关闭抽屉时触发', params: '-' },
];

const code = `
<CButton @click="drawer = true">打开抽屉</CButton>

<CDrawer v-model="drawer" title="我是标题" direction="rtl">
  <span>我来啦!</span>
</CDrawer>
`;
</script>

<template>
  <CDoc 
    title="Drawer 抽屉" 
    description="屏幕边缘滑出的浮层面板。素雅主题下为滑动屏风，华丽主题下为推开的朱红大门。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-row">
      <CButton @click="openDrawer('rtl')">右侧打开 (Right)</CButton>
      <CButton @click="openDrawer('ltr')">左侧打开 (Left)</CButton>
      <CButton @click="openDrawer('ttb')">上侧打开 (Top)</CButton>
      <CButton @click="openDrawer('btt')">下侧打开 (Bottom)</CButton>
    </div>

    <CDrawer v-model="drawer" :title="`Drawer ${direction}`" :direction="direction">
      <div style="padding: 20px;">
        <p>这是抽屉的内容。</p>
        <p>This is drawer content.</p>
        <CButton @click="drawer = false">关闭 (Close)</CButton>
      </div>
    </CDrawer>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
