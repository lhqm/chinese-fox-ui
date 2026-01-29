<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CSwitch from '../components/CSwitch/CSwitch.vue';

const switchVal1 = ref(false);
const switchVal2 = ref(true);
const switchVal3 = ref(false);

const propsData = [
  { name: 'modelValue', desc: '绑定值 (Value)', type: 'boolean', default: 'false' },
  { name: 'disabled', desc: '是否禁用 (Disabled)', type: 'boolean', default: 'false' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '值改变时触发', params: 'value: boolean' },
  { name: 'change', desc: '值改变时触发', params: 'value: boolean' },
];

const code = `
<CSwitch v-model="value1" />
<CSwitch v-model="value2" />
<CSwitch v-model="value3" disabled />
`;
</script>

<template>
  <CDoc 
    title="Switch 开关" 
    description="表示两种相互对立的状态间的切换。素雅主题下为太极/阴阳风格，华丽主题下为灯笼/宫灯风格。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-row">
      <CSwitch v-model="switchVal1" />
      <CSwitch v-model="switchVal2" />
      <CSwitch v-model="switchVal3" disabled />
    </div>
    <div class="demo-info">
      Value 1: {{ switchVal1 }}, Value 2: {{ switchVal2 }}
    </div>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 16px;
}
.demo-info {
  font-size: 14px;
  color: var(--cf-color-text-secondary);
}
</style>
