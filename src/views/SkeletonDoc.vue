<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CSkeleton from '../components/CSkeleton/CSkeleton.vue';
import CCard from '../components/CCard/CCard.vue';

const propsData = [
  { name: 'rows', desc: '行数', type: 'number', default: '3' },
  { name: 'animated', desc: '是否动画', type: 'boolean', default: 'true' },
  { name: 'avatar', desc: '是否带头像', type: 'boolean', default: 'false' },
  { name: 'width', desc: '宽度', type: 'string | number', default: '-' },
  { name: 'height', desc: '高度', type: 'string | number', default: '-' },
];

const code = `
<CSkeleton :rows="4" avatar />
<CSkeleton :rows="3" :animated="false" />
`;
</script>

<template>
  <CDoc 
    title="Skeleton 骨架屏" 
    description="在内容加载前显示占位，避免页面跳动与空白。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-col">
      <CSkeleton :rows="4" avatar />
      <CSkeleton :rows="3" :animated="false" />

      <div style="max-width: 520px;">
        <CCard title="加载中卡片">
          <CSkeleton :rows="3" />
        </CCard>
      </div>
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
