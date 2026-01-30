<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CScrollCarousel from '../components/CScrollCarousel/CScrollCarousel.vue';

const slides = [
  { label: '春山' },
  { label: '夏雨' },
  { label: '秋叶' },
  { label: '冬雪' },
];

const propsData = [
  { name: 'slides', desc: '幻灯数据', type: 'Array<{ label?: string; src?: string }>', default: '[]' },
  { name: 'height', desc: '高度', type: 'string', default: '220px' },
];

const code = `
<CScrollCarousel :slides="[{ label: '春山' }, { label: '夏雨' }]" height="220px" />
`;
</script>

<template>
  <CDoc 
    title="ScrollCarousel 卷轴轮播" 
    description="横向卷轴式的轮播容器，适合展示主题画面或文案。"
    :props-data="propsData"
    :code="code"
  >
    <CScrollCarousel :slides="slides" height="220px" />
  </CDoc>
</template>

<style scoped>
</style>
