<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CBreadcrumb from '../components/CBreadcrumb/CBreadcrumb.vue';
import CBreadcrumbItem from '../components/CBreadcrumb/CBreadcrumbItem.vue';

const propsData = [
  { name: 'separator', desc: '分隔符', type: 'string', default: '/' },
];

const itemPropsData = [
  { name: 'to', desc: '路由跳转对象', type: 'string | object', default: '-' },
  { name: 'replace', desc: '是否替换当前路由', type: 'boolean', default: 'false' },
];

const code = `
<CBreadcrumb>
  <CBreadcrumbItem :to="{ path: '/' }">首页</CBreadcrumbItem>
  <CBreadcrumbItem>活动管理</CBreadcrumbItem>
  <CBreadcrumbItem>活动列表</CBreadcrumbItem>
  <CBreadcrumbItem>活动详情</CBreadcrumbItem>
</CBreadcrumb>
`;
</script>

<template>
  <CDoc 
    title="Breadcrumb 面包屑" 
    description="显示当前页面的路径，快速返回之前的任意页面。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-box">
      <CBreadcrumb>
        <CBreadcrumbItem :to="{ path: '/' }">首页</CBreadcrumbItem>
        <CBreadcrumbItem>活动管理</CBreadcrumbItem>
        <CBreadcrumbItem>活动列表</CBreadcrumbItem>
        <CBreadcrumbItem>活动详情</CBreadcrumbItem>
      </CBreadcrumb>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-box {
  padding: 10px;
}
</style>