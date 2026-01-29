<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CCheckbox from '../components/CCheckbox/CCheckbox.vue';

const check1 = ref(true);
const check2 = ref(false);
const check3 = ref(false);

const propsData = [
  { name: 'modelValue', desc: '绑定值 (Value)', type: 'boolean', default: 'false' },
  { name: 'label', desc: '显示文本 (Label)', type: 'string', default: '-' },
  { name: 'disabled', desc: '是否禁用 (Disabled)', type: 'boolean', default: 'false' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '绑定值改变时触发', params: 'value: boolean' },
  { name: 'change', desc: '绑定值改变时触发', params: 'value: boolean' },
];

const code = `
<CCheckbox v-model="check1" label="备选项1" />
<CCheckbox v-model="check2">备选项2</CCheckbox>
<CCheckbox v-model="check3" disabled>禁用状态</CCheckbox>
`;
</script>

<template>
  <CDoc 
    title="Checkbox 多选框" 
    description="一组备选项中进行多选。素雅主题下为墨迹勾选，华丽主题下为金箔/方胜纹样式。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-row">
      <CCheckbox v-model="check1" label="备选项 1 (Option 1)" />
      <CCheckbox v-model="check2">备选项 2 (Option 2)</CCheckbox>
      <CCheckbox v-model="check3" disabled>禁用 (Disabled)</CCheckbox>
    </div>
    <div class="demo-info">
      Value 1: {{ check1 }}, Value 2: {{ check2 }}
    </div>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.demo-info {
  font-size: 14px;
  color: var(--cf-color-text-secondary);
}
</style>
