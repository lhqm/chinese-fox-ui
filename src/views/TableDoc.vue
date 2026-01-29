<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CTable from '../components/CTable/CTable.vue';
import CTag from '../components/CTag/CTag.vue';

const columns = [
  { key: 'date', title: '日期 (Date)', width: '180px' },
  { key: 'name', title: '姓名 (Name)', width: '180px' },
  { key: 'address', title: '地址 (Address)' },
  { key: 'tag', title: '标签 (Tag)', width: '100px', align: 'center' },
];

const tableData = [
  { date: '2024-05-01', name: '刘备', address: '幽州涿郡涿县', tag: '主公' },
  { date: '2024-05-02', name: '关羽', address: '河东郡解县', tag: '武将' },
  { date: '2024-05-03', name: '张飞', address: '幽州涿郡', tag: '武将' },
  { date: '2024-05-04', name: '诸葛亮', address: '徐州琅琊阳都', tag: '军师' },
];

const propsData = [
  { name: 'data', desc: '显示数据 (Data)', type: 'array', default: '[]' },
  { name: 'columns', desc: '列配置 (Columns)', type: 'Column[]', default: '[]' },
  { name: 'stripe', desc: '斑马纹 (Stripe)', type: 'boolean', default: 'false' },
  { name: 'border', desc: '带边框 (Border)', type: 'boolean', default: 'false' },
];

const eventsData = [
  { name: 'row-click', desc: '当某一行被点击时会触发该事件', params: 'row, index' },
];

const code = `
<CTable :data="tableData" :columns="columns" stripe border>
  <template #tag="{ row }">
    <CTag :type="row.tag === '主公' ? 'warning' : (row.tag === '军师' ? 'success' : 'danger')">
      {{ row.tag }}
    </CTag>
  </template>
</CTable>
`;
</script>

<template>
  <CDoc 
    title="Table 表格" 
    description="用于展示多条结构化数据。素雅主题下为极简表格，华丽主题下为账簿/名册风格。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-section">
      <CTable :data="tableData" :columns="columns" stripe border>
        <template #tag="{ row }">
          <CTag size="small" :type="row.tag === '主公' ? 'warning' : (row.tag === '军师' ? 'success' : 'danger')">
            {{ row.tag }}
          </CTag>
        </template>
      </CTable>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section {
  margin-bottom: 24px;
}
</style>
