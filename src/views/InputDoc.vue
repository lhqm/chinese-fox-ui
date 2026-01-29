<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CInput from '../components/CInput/CInput.vue';

const inputValue = ref('');

const propsData = [
  { name: 'modelValue', desc: '绑定值 (Value)', type: 'string | number', default: '-' },
  { name: 'placeholder', desc: '占位文本 (Placeholder)', type: 'string', default: '-' },
  { name: 'label', desc: '标签文本 (Label)', type: 'string', default: '-' },
  { name: 'clearable', desc: '是否可清空 (Clearable)', type: 'boolean', default: 'false' },
  { name: 'type', desc: '输入框类型 (Type)', type: 'string', default: 'text' },
  { name: 'disabled', desc: '是否禁用 (Disabled)', type: 'boolean', default: 'false' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '输入值改变时触发', params: 'value' },
  { name: 'focus', desc: '获得焦点时触发', params: 'event' },
  { name: 'blur', desc: '失去焦点时触发', params: 'event' },
  { name: 'clear', desc: '点击清空按钮时触发', params: '-' },
];

const code = `
<CInput v-model="value" placeholder="请输入内容" />
<CInput v-model="value" label="用户名" placeholder="请输入用户名" />
<CInput v-model="value" clearable placeholder="可清空输入框" />
<CInput v-model="value" disabled placeholder="禁用状态" />
`;
</script>

<template>
  <CDoc 
    title="Input 输入框" 
    description="基础的文本输入框。素雅主题下为宣纸风格，华丽主题下为金边/奏折风格。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-col">
      <CInput v-model="inputValue" placeholder="Basic Usage" />
      <div style="height: 16px;"></div>
      <CInput v-model="inputValue" label="With Label" placeholder="Username" />
      <div style="height: 16px;"></div>
      <CInput v-model="inputValue" clearable placeholder="Clearable Input" />
      <div style="height: 16px;"></div>
      <CInput disabled placeholder="Disabled Input" />
    </div>
  </CDoc>
</template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
</style>