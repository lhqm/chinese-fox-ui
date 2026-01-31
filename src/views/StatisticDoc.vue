<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CStatistic from '../components/CStatistic/CStatistic.vue';
</script>

<template>
  <CDoc 
    title="Statistic 统计数值" 
    description="用于展示关键数值，支持前后缀与动画过渡。"
    :props-data="[
      { name: 'title', desc: '标题', type: 'string', default: '-' },
      { name: 'value', desc: '数值', type: 'number', default: '-' },
      { name: 'duration', desc: '动画时长(ms)', type: 'number', default: '800' },
      { name: 'prefix', desc: '前缀', type: 'string', default: '-' },
      { name: 'suffix', desc: '后缀', type: 'string', default: '-' }
    ]"
  >
    <div class="demo-row">
      <CStatistic title="访问量" :value="12345" suffix="次" />
      <CStatistic title="增长率" :value="89" prefix="%" />
      <CStatistic title="营收" :value="128" prefix="¥" suffix="万" />
    </div>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
