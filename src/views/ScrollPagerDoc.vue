<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CScrollPager from '../components/CScrollPager/CScrollPager.vue';

const pageBasic = ref(1);
const pageLarge = ref(10);

const propsData = [
  { name: 'modelValue', desc: '当前页 (v-model)', type: 'number', default: '1' },
  { name: 'totalPages', desc: '总页数', type: 'number', default: '1' },
  { name: 'showNumbers', desc: '是否显示页码按钮', type: 'boolean', default: 'true' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '页码变化', params: 'value: number' },
  { name: 'change', desc: '页码变化', params: 'value: number' },
];

const code = `
<CScrollPager v-model="page" :total-pages="12" />
<CScrollPager v-model="pageLarge" :total-pages="100" :show-numbers="true" />
`;
</script>

<template>
  <CDoc 
    title="ScrollPager 书卷分页" 
    description="以书卷意象的分页组件。素雅为淡墨卷边，华丽为红框宣纸与金饰。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-col">
      <div class="demo-item">
        <p>基础用法：第 {{ pageBasic }} 卷</p>
        <CScrollPager v-model="pageBasic" :total-pages="12" />
      </div>
      <div class="demo-item">
        <p>超级多页：第 {{ pageLarge }} 卷</p>
        <CScrollPager v-model="pageLarge" :total-pages="100" />
      </div>
    </div>
  </CDoc>
  </template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
}
.demo-item p {
  margin-bottom: 8px;
  color: var(--cf-color-text-secondary);
}
</style>
