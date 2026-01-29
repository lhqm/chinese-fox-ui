<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CCollapse from '../components/CCollapse/CCollapse.vue';
import CCollapseItem from '../components/CCollapse/CCollapseItem.vue';

const activeNames = ref(['1']);
const activeAccordion = ref('1');

const propsData = [
  { name: 'modelValue', desc: '绑定值 (Value)', type: 'string | string[]', default: '-' },
  { name: 'accordion', desc: '手风琴模式 (Accordion)', type: 'boolean', default: 'false' },
];

const itemPropsData = [
  { name: 'name', desc: '唯一标识 (Name)', type: 'string', default: '-' },
  { name: 'title', desc: '标题 (Title)', type: 'string', default: '-' },
  { name: 'disabled', desc: '是否禁用 (Disabled)', type: 'boolean', default: 'false' },
];

const code = `
<CCollapse v-model="activeNames">
  <CCollapseItem title="标题1" name="1">内容1</CCollapseItem>
  <CCollapseItem title="标题2" name="2">内容2</CCollapseItem>
</CCollapse>
`;
</script>

<template>
  <CDoc 
    title="Collapse 折叠面板" 
    description="折叠面板用于通过折叠/展开的内容区域。素雅主题下为极简线条，华丽主题下为卷轴展开效果。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-section">
      <h3>基础用法 (Basic)</h3>
      <CCollapse v-model="activeNames">
        <CCollapseItem title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </CCollapseItem>
        <CCollapseItem title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        </CCollapseItem>
        <CCollapseItem title="效率 Efficiency" name="3" disabled>
          <div>简化流程：设计简洁直观的操作流程；</div>
        </CCollapseItem>
        <CCollapseItem title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        </CCollapseItem>
      </CCollapse>
    </div>

    <div class="demo-section">
      <h3>手风琴效果 (Accordion)</h3>
      <CCollapse v-model="activeAccordion" accordion>
        <CCollapseItem title="李白 (Li Bai)" name="1">
          <div>床前明月光，疑是地上霜。</div>
        </CCollapseItem>
        <CCollapseItem title="杜甫 (Du Fu)" name="2">
          <div>国破山河在，城春草木深。</div>
        </CCollapseItem>
        <CCollapseItem title="白居易 (Bai Juyi)" name="3">
          <div>离离原上草，一岁一枯荣。</div>
        </CCollapseItem>
      </CCollapse>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section {
  margin-bottom: 30px;
}
.demo-section h3 {
  margin-bottom: 12px;
  font-size: 16px;
  color: var(--cf-color-text-secondary);
}
</style>
