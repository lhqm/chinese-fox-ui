<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CAlert from '../components/CAlert/CAlert.vue';

const propsData = [
  { name: 'title', desc: '标题', type: 'string', default: '-' },
  { name: 'type', desc: '主题', type: 'success/warning/info/error', default: 'info' },
  { name: 'description', desc: '辅助性文字', type: 'string', default: '-' },
  { name: 'closable', desc: '是否可关闭', type: 'boolean', default: 'true' },
  { name: 'center', desc: '文字是否居中', type: 'boolean', default: 'false' },
  { name: 'effect', desc: '选择提供的主题', type: 'light/dark', default: 'light' },
];

const eventsData = [
  { name: 'close', desc: '关闭警告时触发', params: '-' },
];

const code = `
<CAlert title="成功提示的文案" type="success" />
<CAlert title="消息提示的文案" type="info" />
<CAlert title="警告提示的文案" type="warning" />
<CAlert title="错误提示的文案" type="error" />

<CAlert title="成功提示的文案" type="success" effect="dark" />
<CAlert title="错误提示的文案" type="error" description="这是一段辅助性文字" />
`;
</script>

<template>
  <CDoc 
    title="Alert 警告" 
    description="用于页面中展示重要的提示信息。"
    :props-data="propsData"
    :events-data="eventsData"
    :code="code"
  >
    <div class="demo-box">
      <CAlert title="成功提示的文案" type="success" />
      <CAlert title="消息提示的文案" type="info" />
      <CAlert title="警告提示的文案" type="warning" />
      <CAlert title="错误提示的文案" type="error" />
      
      <div style="height: 20px;"></div>
      <CAlert title="Dark Effect Success" type="success" effect="dark" />
      <CAlert title="Dark Effect Error" type="error" effect="dark" />

      <div style="height: 20px;"></div>
      <CAlert title="带辅助性文字介绍" type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……" />
    </div>
  </CDoc>
</template>

<style scoped>
.demo-box {
  width: 100%;
}
</style>