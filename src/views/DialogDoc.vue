<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CDialog from '../components/CDialog/CDialog.vue';
import CButton from '../components/CButton/CButton.vue';

const showDialog1 = ref(false);
const showDialog2 = ref(false);

const propsData = [
  { name: 'modelValue', desc: '是否显示 (Visible)', type: 'boolean', default: 'false' },
  { name: 'title', desc: '标题 (Title)', type: 'string', default: '-' },
  { name: 'width', desc: '宽度 (Width)', type: 'string', default: '500px' },
];

const eventsData = [
  { name: 'update:modelValue', desc: '显示状态改变时触发', params: 'visible: boolean' },
  { name: 'open', desc: '对话框打开时触发', params: '-' },
  { name: 'close', desc: '对话框关闭时触发', params: '-' },
];

const slotsData = [
  { name: 'default', desc: '对话框内容 (Content)' },
  { name: 'footer', desc: '底部操作区 (Footer)' },
];

const code = `
<CButton @click="show = true">打开对话框</CButton>

<CDialog v-model="show" title="提示">
  <span>这是一段信息。</span>
  <template #footer>
    <CButton @click="show = false">取消</CButton>
    <CButton type="primary" @click="show = false">确定</CButton>
  </template>
</CDialog>
`;
</script>

<template>
  <CDoc 
    title="Dialog 对话框" 
    description="模态对话框。素雅主题下为雅致信笺风格，华丽主题下为圣旨/喜帖风格。"
    :props-data="propsData"
    :events-data="eventsData"
    :slots-data="slotsData"
    :code="code"
  >
    <div class="demo-row">
      <CButton @click="showDialog1 = true">打开基础对话框 (Basic Dialog)</CButton>
      <CButton variant="primary" @click="showDialog2 = true">打开带底部对话框 (With Footer)</CButton>
    </div>

    <CDialog v-model="showDialog1" title="基础对话框">
      <p>这里是对话框内容。</p>
      <p>This is the dialog content.</p>
    </CDialog>

    <CDialog v-model="showDialog2" title="确认操作" width="400px">
      <p>确定要执行此操作吗？</p>
      <p>Are you sure you want to proceed?</p>
      <template #footer>
        <div class="dialog-footer">
          <CButton @click="showDialog2 = false">取消 (Cancel)</CButton>
          <CButton variant="primary" @click="showDialog2 = false">确定 (Confirm)</CButton>
        </div>
      </template>
    </CDialog>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 12px;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
}
</style>
