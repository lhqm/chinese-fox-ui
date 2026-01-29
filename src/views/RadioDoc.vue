<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CRadio from '../components/CRadio/CRadio.vue';

const radioVal = ref('1');
const radioVal2 = ref('a');

const propsData = [
  { name: 'modelValue', desc: '绑定值 (Value)', type: 'string | number | boolean', default: '-' },
  { name: 'value', desc: '选项值 (Option Value)', type: 'string | number | boolean', default: '-' },
  { name: 'label', desc: '显示文本 (Label)', type: 'string', default: '-' },
  { name: 'disabled', desc: '是否禁用 (Disabled)', type: 'boolean', default: 'false' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '绑定值改变时触发', params: 'value' },
  { name: 'change', desc: '绑定值改变时触发', params: 'value' },
];

const code = `
<CRadio v-model="radio" value="1" label="备选项1" />
<CRadio v-model="radio" value="2">备选项2</CRadio>
`;
</script>

<template>
  <CDoc 
    title="Radio 单选框" 
    description="在一组备选项中进行单选。素雅主题下为墨点风格，华丽主题下为金箔/珠玑风格。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-section">
      <div class="demo-row">
        <CRadio v-model="radioVal" value="1" label="备选项 1 (Option 1)" />
        <CRadio v-model="radioVal" value="2" label="备选项 2 (Option 2)" />
      </div>
      <p class="demo-info">Selected: {{ radioVal }}</p>
    </div>

    <div class="demo-section">
      <div class="demo-row">
        <CRadio v-model="radioVal2" value="a">选项 A (Option A)</CRadio>
        <CRadio v-model="radioVal2" value="b">选项 B (Option B)</CRadio>
        <CRadio v-model="radioVal2" value="c" disabled>禁用 (Disabled)</CRadio>
      </div>
      <p class="demo-info">Selected: {{ radioVal2 }}</p>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section {
  margin-bottom: 24px;
}
.demo-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.demo-info {
  font-size: 14px;
  color: var(--cf-color-text-secondary);
}
</style>
