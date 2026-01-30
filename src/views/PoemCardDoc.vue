<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CPoemCard from '../components/CPoemCard/CPoemCard.vue';

const propsData = [
  { name: 'title', desc: '诗词标题', type: 'string', default: '-' },
  { name: 'author', desc: '作者', type: 'string', default: '-' },
  { name: 'content', desc: '正文内容（支持换行）', type: 'string', default: '-' },
  { name: 'footer', desc: '页脚注释', type: 'string', default: '-' },
];

const code = `
<CPoemCard
  title="山居秋暝"
  author="王维"
  :content="\`空山新雨后，天气晚来秋。
明月松间照，清泉石上流。
竹喧归浣女，莲动下渔舟。
随意春芳歇，王孙自可留。\`"
  footer="唐·王维"
/>`;
</script>

<template>
  <CDoc 
    title="PoemCard 诗词卡片" 
    description="用于展示诗词文案的卡片。素雅为磨砂墨纸与虚线边，华丽为红框与宣纸底。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-col">
      <CPoemCard
        title="山居秋暝"
        author="王维"
        :content="`空山新雨后，天气晚来秋。
明月松间照，清泉石上流。
竹喧归浣女，莲动下渔舟。
随意春芳歇，王孙自可留。`"
        footer="唐·王维"
      />
    </div>
  </CDoc>
  </template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
}
</style>
