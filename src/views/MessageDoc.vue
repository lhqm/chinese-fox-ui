<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CButton from '../components/CButton/CButton.vue';
import CMessage from '../components/CMessage';

const openSuccess = () => {
  CMessage.success('恭喜你，这是一条成功消息');
};

const openWarning = () => {
  CMessage.warning('警告，这是一条警告消息');
};

const openInfo = () => {
  CMessage.info('这是一条普通消息');
};

const openError = () => {
  CMessage.error('错了哦，这是一条错误消息');
};

const propsData = [
  { name: 'message', desc: '消息文字', type: 'string', default: '-' },
  { name: 'type', desc: '主题', type: 'success/warning/info/error', default: 'info' },
  { name: 'duration', desc: '显示时间, 毫秒。设为 0 则不会自动关闭', type: 'number', default: '3000' },
  { name: 'onClose', desc: '关闭时的回调函数', type: 'function', default: '-' },
];

const code = `
import { CMessage } from 'chinese-fox-ui';

CMessage.success('成功消息');
CMessage.warning('警告消息');
CMessage.info('普通消息');
CMessage.error('错误消息');
`;
</script>

<template>
  <CDoc 
    title="Message 消息提示" 
    description="常用于主动操作后的反馈提示。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-box">
      <CButton :onClick="openSuccess" variant="success">成功</CButton>
      <CButton :onClick="openWarning" variant="secondary">警告</CButton>
      <CButton :onClick="openInfo" variant="primary">消息</CButton>
      <CButton :onClick="openError" variant="danger">错误</CButton>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-box {
  display: flex;
  gap: 10px;
}
</style>