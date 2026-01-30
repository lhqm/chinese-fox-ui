<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';
import CCard from '../CCard/CCard.vue';
import CTable from '../CTable/CTable.vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // or any other style

defineProps<{
  title: string;
  description?: string;
  propsData?: any[];
  eventsData?: any[];
  slotsData?: any[];
  code?: string;
}>();

const propsColumns = [
  { key: 'name', title: '属性名 (Name)', width: '150px' },
  { key: 'desc', title: '说明 (Description)' },
  { key: 'type', title: '类型 (Type)', width: '150px' },
  { key: 'default', title: '默认值 (Default)', width: '150px' },
];

const eventsColumns = [
  { key: 'name', title: '事件名 (Event Name)', width: '150px' },
  { key: 'desc', title: '说明 (Description)' },
  { key: 'params', title: '回调参数 (Parameters)', width: '250px' },
];

const slotsColumns = [
  { key: 'name', title: '插槽名 (Slot Name)', width: '150px' },
  { key: 'desc', title: '说明 (Description)' },
];

const highlightCode = () => {
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el as HTMLElement);
  });
};

onMounted(() => {
  highlightCode();
});

onUpdated(() => {
  highlightCode();
});
</script>

<template>
  <div class="c-doc">
    <h1 class="c-doc__title">{{ title }}</h1>
    <p v-if="description" class="c-doc__desc">{{ description }}</p>
    
    <!-- Demo Section -->
    <div class="c-doc__section">
      <h2 class="c-doc__subtitle">代码演示 (Demo)</h2>
      <CCard class="c-doc__demo-card">
        <slot></slot>
      </CCard>
    </div>

    <!-- Code Example -->
    <div v-if="code" class="c-doc__section">
      <h2 class="c-doc__subtitle">示例代码 (Example Code)</h2>
      <pre class="c-doc__code"><code class="language-html">{{ code }}</code></pre>
    </div>
    
    <!-- Props API -->
    <div v-if="propsData && propsData.length" class="c-doc__section">
      <h2 class="c-doc__subtitle">属性 (Props)</h2>
      <CTable :data="propsData" :columns="propsColumns" border stripe />
    </div>

    <!-- Events API -->
    <div v-if="eventsData && eventsData.length" class="c-doc__section">
      <h2 class="c-doc__subtitle">事件 (Events)</h2>
      <CTable :data="eventsData" :columns="eventsColumns" border stripe />
    </div>

    <!-- Slots API -->
    <div v-if="slotsData && slotsData.length" class="c-doc__section">
      <h2 class="c-doc__subtitle">插槽 (Slots)</h2>
      <CTable :data="slotsData" :columns="slotsColumns" border stripe />
    </div>
  </div>
</template>

<style scoped>
.c-doc {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.c-doc__title {
  font-size: 32px;
  margin-bottom: 16px;
  color: var(--cf-color-text);
  border-bottom: 2px solid var(--cf-color-border);
  padding-bottom: 8px;
  position: relative;
  padding-left: 36px;
}

.c-doc__title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-image: var(--cf-doc-title-icon);
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
}

.c-doc__desc {
  font-size: 16px;
  color: var(--cf-color-text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.c-doc__section {
  margin-bottom: 40px;
}

.c-doc__subtitle {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--cf-color-text);
  position: relative;
  padding-left: 12px;
}

.c-doc__subtitle::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 4px;
  background-color: var(--cf-color-primary);
  border-radius: 2px;
}

.c-doc__demo-card {
  padding: 24px;
}

.c-doc__code {
  background-color: #f5f7fa;
  padding: 16px;
  border-radius: 4px;
  font-family: monospace;
  overflow-x: auto;
  border: 1px solid var(--cf-color-border);
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}

[data-theme="huali"] .c-doc__title {
  color: #E60012;
  border-bottom-color: #E60012;
}

[data-theme="huali"] .c-doc__subtitle {
  color: #B3000E;
}

[data-theme="huali"] .c-doc__code {
  background-color: #FFF8E7;
  border-color: #E60012;
  color: #555;
}
</style>
