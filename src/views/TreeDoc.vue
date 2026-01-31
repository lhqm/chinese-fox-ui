<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CTree from '../components/CTree/CTree.vue';

type Node = { label: string; children?: Node[]; expanded?: boolean };

const data: Node[] = [
  { label: '诗词', children: [
    { label: '唐', children: [
      { label: '王维' },
      { label: '李白' },
    ]},
    { label: '宋', children: [
      { label: '苏轼' },
      { label: '辛弃疾' },
    ]}
  ]},
  { label: '器物', children: [
    { label: '琴' }, { label: '棋' }, { label: '书' }, { label: '画' }
  ]}
];
</script>

<template>
  <CDoc 
    title="Tree 树形组件" 
    description="层级数据展示，支持选中与子级全选。"
  >
    <CTree :data="data" checkable @change="(list:any)=>{}" />
  </CDoc>
</template>

<style scoped>
</style>
