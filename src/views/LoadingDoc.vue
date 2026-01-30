<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CLoading from '../components/CLoading/CLoading.vue';
import LoadingService from '../components/CLoading';

const fullscreenVisible = ref(false);

const propsData = [
  { name: 'visible', desc: '是否显示加载', type: 'boolean', default: 'false' },
  { name: 'fullscreen', desc: '是否全屏加载遮罩', type: 'boolean', default: 'false' },
  { name: 'text', desc: '加载文案', type: 'string', default: '-' },
];

const code = `
<CLoading :visible="true" text="加载中…" />

const loading = LoadingService({ text: '全屏加载中…', fullscreen: true });
setTimeout(() => loading.close(), 1500);
`;

const openFullscreen = () => {
  fullscreenVisible.value = true;
  setTimeout(() => {
    fullscreenVisible.value = false;
  }, 1200);
};

const openService = () => {
  const inst = LoadingService({ text: '切换中…', fullscreen: true });
  setTimeout(() => inst.close(), 1200);
};
</script>

<template>
  <CDoc
    title="Loading 加载"
    description="用于页面或区域的加载状态展示。素雅为墨晕涟漪，华丽为红印脉动。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-col">
      <div class="demo-item">
        <p>基础加载 (局部)</p>
        <CLoading :visible="true" text="加载中…" />
      </div>

      <div class="demo-item">
        <p>全屏加载 (组件)</p>
        <button class="demo-btn" @click="openFullscreen">打开全屏加载</button>
        <CLoading :visible="fullscreenVisible" fullscreen text="全屏加载中…" />
      </div>

      <div class="demo-item">
        <p>全屏加载 (服务调用)</p>
        <button class="demo-btn" @click="openService">使用 LoadingService</button>
      </div>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 720px;
}
.demo-item p {
  margin-bottom: 8px;
  color: var(--cf-color-text-secondary);
}
.demo-btn {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
  cursor: pointer;
}
</style>

