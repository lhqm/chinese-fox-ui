<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CShuJianDesc from '../components/CShuJianDesc/CShuJianDesc.vue';

const items = [
  { label: '作者', value: '离狐千慕' },
  { label: '主题', value: '中国风 UI' },
  { label: '版本', value: '0.1.0' },
  { label: '许可证', value: 'MIT' },
];
</script>

<template>
  <CDoc 
    title="ShuJianDesc 书简描述" 
    description="以书简风格展示键值信息，支持列数配置。"
    :props-data="[
      { name: 'items', desc: '条目数组', type: 'Array<{label,value}>', default: '-' },
      { name: 'column', desc: '列数', type: 'number', default: '2' }
    ]"
  >
    <CShuJianDesc :items="items" :column="2" />
  </CDoc>
</template>

<style scoped>
</style>
