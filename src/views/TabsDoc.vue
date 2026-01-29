<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CTabs from '../components/CTabs/CTabs.vue';
import CTabPane from '../components/CTabs/CTabPane.vue';

const activeName = ref('first');

const propsData = [
  { name: 'modelValue', desc: '绑定值，选中选项卡的 name', type: 'string | number', default: '-' },
];

const panePropsData = [
  { name: 'label', desc: '选项卡标题', type: 'string', default: '-' },
  { name: 'name', desc: '与选项卡绑定值对应的标识符', type: 'string | number', default: '-' },
];

const eventsData = [
  { name: 'tab-click', desc: 'tab 被选中时触发', params: '{ name, label }' },
  { name: 'update:modelValue', desc: '绑定值变化时触发', params: 'name' },
];

const code = `
<CTabs v-model="activeName">
  <CTabPane label="用户管理" name="first">用户管理内容</CTabPane>
  <CTabPane label="配置管理" name="second">配置管理内容</CTabPane>
  <CTabPane label="角色管理" name="third">角色管理内容</CTabPane>
  <CTabPane label="定时任务补偿" name="fourth">定时任务补偿内容</CTabPane>
</CTabs>
`;
</script>

<template>
  <CDoc 
    title="Tabs 标签页" 
    description="分隔内容上有关联但属于不同类别的数据集合。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-box">
      <CTabs v-model="activeName">
        <CTabPane label="用户管理" name="first">用户管理内容</CTabPane>
        <CTabPane label="配置管理" name="second">配置管理内容</CTabPane>
        <CTabPane label="角色管理" name="third">角色管理内容</CTabPane>
        <CTabPane label="定时任务补偿" name="fourth">定时任务补偿内容</CTabPane>
      </CTabs>
    </div>

    <h3 style="margin-top: 30px;">TabPane Attributes</h3>
    <div class="demo-box">
       <!-- Reusing table component logic manually if needed or just listing it, CDoc only supports one table for now, 
            but we can add custom content. -->
       <!-- Ideally CDoc should support multiple tables, but for now we list main props. -->
    </div>
  </CDoc>
</template>

<style scoped>
.demo-box {
  padding: 10px;
}
</style>