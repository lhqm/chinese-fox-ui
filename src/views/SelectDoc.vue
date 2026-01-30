<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CSelect from '../components/CSelect/CSelect.vue';

const selectValue1 = ref('');
const selectValue2 = ref('wei');
const selectValueLarge = ref('');

const options = [
  { label: '魏国 (Wei)', value: 'wei' },
  { label: '蜀国 (Shu)', value: 'shu' },
  { label: '吴国 (Wu)', value: 'wu' },
  { label: '群雄 (Qun)', value: 'qun' },
];

const largeOptions = Array.from({ length: 500 }, (_, i) => ({
  label: `选项 Option ${i + 1}`,
  value: `opt_${i + 1}`,
}));

const propsData = [
  { name: 'modelValue', desc: '绑定值 (Value)', type: 'string | number', default: '-' },
  { name: 'options', desc: '选项数组 (Options)', type: '{ label: string, value: any }[]', default: '[]' },
  { name: 'placeholder', desc: '占位文本 (Placeholder)', type: 'string', default: '请选择' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '选中值改变时触发', params: 'value' },
  { name: 'change', desc: '选中值改变时触发', params: 'value' },
  { name: 'visible-change', desc: '下拉框显示状态变化时触发', params: 'visible: boolean' },
];

const code = `
<CSelect v-model="value" :options="options" placeholder="请选择阵营" />

<script setup>
const options = [
  { label: '魏国', value: 'wei' },
  { label: '蜀国', value: 'shu' },
  { label: '吴国', value: 'wu' },
];
<\/script>
`;
</script>

<template>
  <CDoc 
    title="Select 选择器" 
    description="下拉选择器。素雅主题下为极简风格，华丽主题下带有卷轴/宫廷元素装饰。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-col">
      <div class="demo-item">
        <p>基础用法 (Basic Usage): {{ selectValue1 }}</p>
        <CSelect v-model="selectValue1" :options="options" placeholder="请选择阵营 (Select Faction)" />
      </div>
      
      <div class="demo-item">
        <p>默认选中 (Default Selected): {{ selectValue2 }}</p>
        <CSelect v-model="selectValue2" :options="options" />
      </div>

      <div class="demo-item">
        <p>超级多数据 (Super Large Data): {{ selectValueLarge }}</p>
        <CSelect v-model="selectValueLarge" :options="largeOptions" placeholder="请选择 (Select)" />
      </div>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 360px;
}
.demo-item p {
  margin-bottom: 8px;
  color: var(--cf-color-text-secondary);
  font-size: 14px;
}
</style>
