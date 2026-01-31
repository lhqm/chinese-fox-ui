<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CTimeline from '../components/CTimeline/CTimeline.vue';
import CTimelineItem from '../components/CTimeline/CTimelineItem.vue';

const propsData = [
  { name: 'reverse', desc: '倒序', type: 'boolean', default: 'false' },
];
const itemPropsData = [
  { name: 'title', desc: '标题', type: 'string', default: '-' },
  { name: 'time', desc: '时间', type: 'string', default: '-' },
  { name: 'status', desc: '状态', type: 'default | primary | success | warning | danger', default: 'default' },
];

const code = `
<CTimeline>
  <CTimelineItem title="创建项目" time="09:00" status="primary">初始化仓库与配置</CTimelineItem>
  <CTimelineItem title="开发组件" time="11:30" status="success">完成 Button 与 Card</CTimelineItem>
  <CTimelineItem title="发布预览" time="15:00" status="warning">构建并部署到 Pages</CTimelineItem>
  <CTimelineItem title="发布npm" time="18:30" status="danger">推送 0.1.0 到 npm</CTimelineItem>
</CTimeline>
`;
</script>

<template>
  <CDoc 
    title="Timeline 时间轴" 
    description="用于展示按时间顺序的事件列表。支持状态色与倒序。"
    :props-data="propsData"
    :slots-data="[{ name: 'default', desc: '时间轴项 (CTimelineItem)' }]"
    :code="code"
  >
    <div class="demo-col">
      <CTimeline>
        <CTimelineItem title="创建项目" time="09:00" status="primary">初始化仓库与配置</CTimelineItem>
        <CTimelineItem title="开发组件" time="11:30" status="success">完成 Button 与 Card</CTimelineItem>
        <CTimelineItem title="发布预览" time="15:00" status="warning">构建并部署到 Pages</CTimelineItem>
        <CTimelineItem title="发布npm" time="18:30" status="danger">推送 0.1.0 到 npm</CTimelineItem>
      </CTimeline>

      <CTimeline :reverse="true">
        <CTimelineItem title="最新事件" time="19:00" status="primary">优先展示最新</CTimelineItem>
        <CTimelineItem title="较早事件" time="12:00">普通事件</CTimelineItem>
      </CTimeline>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
}
</style>
