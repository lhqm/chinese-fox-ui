<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CCoupletBanner from '../components/CCoupletBanner/CCoupletBanner.vue';
</script>

<template>
  <CDoc 
    title="CoupletBanner 对联横幅" 
    description="页面装饰型对联横幅，支持固定与自由布局。"
  >
    <div class="demo-box">
      <CCoupletBanner left-text="春风得意" right-text="万象更新" />
    </div>
    <div class="demo-fixed">
      <CCoupletBanner left-text="瑞气盈门" right-text="鸿运当头" :fixed="true" />
    </div>
  </CDoc>
</template>

<style scoped>
.demo-box {
  border: 1px solid var(--cf-color-border);
  border-radius: 8px;
  background: var(--cf-color-surface);
  padding: 20px;
}
.demo-fixed {
  height: 300px;
  position: relative;
}
</style>
