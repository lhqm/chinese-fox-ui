<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CCard from '../components/CCard/CCard.vue';

const propsData = [
  { name: 'title', desc: '卡片标题 (Title)', type: 'string', default: '-' },
];

const slotsData = [
  { name: 'default', desc: '卡片内容 (Content)' },
];

const code = `
<CCard title="卡片标题">
  这是一段卡片内容。
  <br>
  Card content goes here.
</CCard>

<CCard>
  无标题卡片。
  <br>
  Card without title.
</CCard>
`;
</script>

<template>
  <CDoc 
    title="Card 卡片" 
    description="基础容器组件。素雅主题下为磨砂玻璃效果，华丽主题下为带装饰角的书简风格。"
    :props-data="propsData"
    :slots-data="slotsData"
    :code="code"
  >
    <div class="demo-col">
      <CCard title="卡片标题 (Card Title)">
        <p>这是一段卡片内容。素雅主题下背景为半透明磨砂，华丽主题下背景为米色宣纸并带有红色对角装饰。</p>
        <p>This is card content. Frosted glass in Suya theme, decorative paper in Huali theme.</p>
      </CCard>
      
      <CCard>
        <p>无标题卡片 (No Title Card)</p>
        <p>仅展示内容区域。</p>
      </CCard>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
