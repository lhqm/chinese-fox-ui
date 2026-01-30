<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CStamp from '../components/CStamp/CStamp.vue';

const showApproval = ref(false);
const showReject = ref(false);

const propsData = [
  { name: 'text', desc: '印章文字', type: 'string', default: '已阅/驳回' },
  { name: 'visible', desc: '是否显示 (v-model:visible)', type: 'boolean', default: 'false' },
  { name: 'size', desc: '尺寸(px)', type: 'number', default: '120' },
  { name: 'type', desc: '类型', type: 'approval | reject', default: 'approval' },
];

const eventsData = [
  { name: 'update:visible', desc: '显示状态改变', params: 'visible: boolean' },
  { name: 'shown', desc: '印章出现时触发', params: '-' },
];

const code = `
<button @click="show = true">加盖“已阅”</button>
<CStamp v-model:visible="show" text="已阅" type="approval" />
`;
</script>

<template>
  <CDoc 
    title="Stamp 印章" 
    description="操作确认的印章效果。素雅为圆形墨章，华丽为朱红印记。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-row">
      <button class="demo-btn" @click="showApproval = true">加盖“已阅”</button>
      <CStamp v-model:visible="showApproval" text="已阅" type="approval" />

      <button class="demo-btn" @click="showReject = true">加盖“驳回”</button>
      <CStamp v-model:visible="showReject" text="驳回" type="reject" />
    </div>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 20px;
  align-items: center;
}
.demo-btn {
  padding: 8px 12px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
  cursor: pointer;
  border-radius: 4px;
}
</style>
