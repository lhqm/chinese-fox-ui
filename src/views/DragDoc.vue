<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CDragArea from '../components/CDragArea/CDragArea.vue';

type Item = { id: number; label: string; category: string };
const categories = [
  { key: 'todo', title: '待处理' },
  { key: 'done', title: '已完成' }
];
const items = ref<Item[]>([
  { id: 1, label: '优化布局', category: 'todo' },
  { id: 2, label: '增加时间轴', category: 'todo' },
  { id: 3, label: '发布 0.1.0', category: 'done' }
]);
const update = (list: Item[]) => { items.value = list as any; };
</script>

<template>
  <CDoc 
    title="Drag 拖拽" 
    description="在指定范围内对项目进行排序与分类变更。"
  >
    <CDragArea :items="items" :categories="categories" @update:items="update" />
  </CDoc>
</template>

<style scoped>
</style>
