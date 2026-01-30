<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CProgressQin from '../components/CProgressQin/CProgressQin.vue';

const propsData = [
  { name: 'value', desc: '进度百分比', type: 'number', default: '0' },
  { name: 'showLabel', desc: '显示百分比文本', type: 'boolean', default: 'false' },
  { name: 'width', desc: '宽度', type: 'string', default: '100%' },
  { name: 'height', desc: '高度', type: 'string', default: '16px' },
];

const code = `
<CProgressQin :value="65" :show-label="true" />
`;
</script>

<template>
  <CDoc 
    title="ProgressQin 古琴进度" 
    description="以琴弦意象表达进度，素雅为淡墨琴弦，华丽为红金装饰。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-col">
      <CProgressQin :value="30" :show-label="true" />
      <CProgressQin :value="65" :show-label="true" />
      <CProgressQin :value="100" :show-label="true" height="20px" />
    </div>
  </CDoc>
</template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
