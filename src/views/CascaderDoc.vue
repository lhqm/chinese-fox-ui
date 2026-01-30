<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CCascader from '../components/CCascader/CCascader.vue';

type Opt = { label: string; value: string | number; children?: Opt[] };

const valueBasic = ref<Array<string | number>>([]);
const valueLarge = ref<Array<string | number>>([]);

const optionsBasic: Opt[] = [
  { label: '中国', value: 'china', children: [
    { label: '四川', value: 'sc', children: [
      { label: '成都', value: 'cd' },
      { label: '绵阳', value: 'my' },
    ]},
    { label: '广东', value: 'gd', children: [
      { label: '广州', value: 'gz' },
      { label: '深圳', value: 'sz' },
    ]},
  ]},
  { label: '日本', value: 'jp', children: [
    { label: '关东', value: 'kd', children: [
      { label: '东京', value: 'tyo' },
      { label: '千叶', value: 'chiba' },
    ]},
    { label: '关西', value: 'ks', children: [
      { label: '京都', value: 'kyoto' },
      { label: '大阪', value: 'osaka' },
    ]},
  ]},
];

function genLarge(levels = 3, breadth = 40): Opt[] {
  const makeLevel = (lvl: number, prefix: string): Opt[] => {
    return Array.from({ length: breadth }, (_, i) => {
      const v = `${prefix}_${i+1}`;
      const node: Opt = { label: `L${lvl} - ${i+1}`, value: v };
      if (lvl < levels) {
        node.children = makeLevel(lvl + 1, v);
      }
      return node;
    });
  };
  return makeLevel(1, 'n');
}

const optionsLarge = genLarge(3, 50);

const propsData = [
  { name: 'modelValue', desc: '选中路径 (Selected Path)', type: 'Array<string | number>', default: '[]' },
  { name: 'options', desc: '级联数据 (Options)', type: 'Array<{ label, value, children }>', default: '[]' },
  { name: 'placeholder', desc: '占位文本 (Placeholder)', type: 'string', default: '请选择' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '选中路径变更', params: 'value: Array<string | number>' },
  { name: 'change', desc: '选中路径变更', params: 'value: Array<string | number>' },
  { name: 'visible-change', desc: '下拉框显示切换', params: 'visible: boolean' },
];
</script>

<template>
  <CDoc 
    title="Cascader 多级联动" 
    description="逐级选择的级联选择器。素雅主题下为磨砂墨纸风格，华丽主题下为边框装饰风格。"
    :props-data="propsData"
    :events-data="eventsData"
  >
    <div class="demo-col">
      <div class="demo-item">
        <p>基础用法 (Basic): {{ valueBasic }}</p>
        <CCascader v-model="valueBasic" :options="optionsBasic" placeholder="请选择地区" />
      </div>
      <div class="demo-item">
        <p>超级多数据 (Super Large): {{ valueLarge }}</p>
        <CCascader v-model="valueLarge" :options="optionsLarge" placeholder="请选择" />
      </div>
    </div>
  </CDoc>
  </template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
}
.demo-item p {
  margin-bottom: 8px;
  color: var(--cf-color-text-secondary);
  font-size: 14px;
}
</style>
