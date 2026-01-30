<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CFanCollapse from '../components/CFanCollapse/CFanCollapse.vue';

const items = [
  { title: '扇面一', content: '山川之美，古来共谈。' },
  { title: '扇面二', content: '风烟望五津，古道连青松。' },
  { title: '扇面三', content: '江天一色无纤尘，皎皎空中孤月轮。' },
];

const propsData = [
  { name: 'items', desc: '扇面数据', type: 'Array<{ title: string; content: string }>', default: '[]' },
];

const code = `
<CFanCollapse :items="[{ title: '扇面一', content: '...' }]" />
`;
</script>

<template>
  <CDoc 
    title="FanCollapse 折扇面板" 
    description="折扇式的内容面板，点击扇面展开细节。"
    :props-data="propsData"
    :code="code"
  >
    <CFanCollapse :items="items" />
  </CDoc>
</template>

<style scoped>
</style>
