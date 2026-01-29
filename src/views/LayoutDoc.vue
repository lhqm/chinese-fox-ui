<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CRow from '../components/CRow/CRow.vue';
import CCol from '../components/CCol/CCol.vue';

const propsData = [
  { name: 'gutter', desc: '栅格间隔 (Gutter)', type: 'number', default: '0' },
  { name: 'justify', desc: '水平排列 (Justify)', type: 'start | end | center | space-around | space-between', default: 'start' },
  { name: 'align', desc: '垂直排列 (Align)', type: 'top | middle | bottom', default: 'top' },
];

const colPropsData = [
  { name: 'span', desc: '栅格占据的列数 (Span)', type: 'number', default: '24' },
  { name: 'offset', desc: '栅格左侧的间隔格数 (Offset)', type: 'number', default: '0' },
];

const code = `
<CRow :gutter="20">
  <CCol :span="6"><div class="grid-content">6</div></CCol>
  <CCol :span="6"><div class="grid-content">6</div></CCol>
  <CCol :span="6"><div class="grid-content">6</div></CCol>
  <CCol :span="6"><div class="grid-content">6</div></CCol>
</CRow>
`;
</script>

<template>
  <CDoc 
    title="Layout 布局" 
    description="24栅格系统。通过基础的 24 分栏，迅速简便地创建布局。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-section">
      <p>基础布局 (Basic)</p>
      <CRow>
        <CCol :span="24"><div class="grid-content bg-purple-dark">24</div></CCol>
      </CRow>
      <CRow>
        <CCol :span="12"><div class="grid-content bg-purple">12</div></CCol>
        <CCol :span="12"><div class="grid-content bg-purple-light">12</div></CCol>
      </CRow>
      <CRow>
        <CCol :span="8"><div class="grid-content bg-purple">8</div></CCol>
        <CCol :span="8"><div class="grid-content bg-purple-light">8</div></CCol>
        <CCol :span="8"><div class="grid-content bg-purple">8</div></CCol>
      </CRow>
      <CRow>
        <CCol :span="6"><div class="grid-content bg-purple">6</div></CCol>
        <CCol :span="6"><div class="grid-content bg-purple-light">6</div></CCol>
        <CCol :span="6"><div class="grid-content bg-purple">6</div></CCol>
        <CCol :span="6"><div class="grid-content bg-purple-light">6</div></CCol>
      </CRow>
    </div>

    <div class="demo-section">
      <p>分栏间隔 (Gutter)</p>
      <CRow :gutter="20">
        <CCol :span="6"><div class="grid-content bg-purple">6</div></CCol>
        <CCol :span="6"><div class="grid-content bg-purple">6</div></CCol>
        <CCol :span="6"><div class="grid-content bg-purple">6</div></CCol>
        <CCol :span="6"><div class="grid-content bg-purple">6</div></CCol>
      </CRow>
    </div>

    <div class="demo-section">
      <p>混合布局 (Hybrid)</p>
      <CRow :gutter="20">
        <CCol :span="16"><div class="grid-content bg-purple">16</div></CCol>
        <CCol :span="8"><div class="grid-content bg-purple-light">8</div></CCol>
      </CRow>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section {
  margin-bottom: 20px;
}
.c-row {
  margin-bottom: 20px;
}
.c-row:last-child {
  margin-bottom: 0;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.bg-purple-dark { background: #99a9bf; }
.bg-purple { background: #d3dce6; color: #333; }
.bg-purple-light { background: #e5e9f2; color: #333; }
</style>
