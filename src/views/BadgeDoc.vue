<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CBadge from '../components/CBadge/CBadge.vue';
import CButton from '../components/CButton/CButton.vue';
import CAvatar from '../components/CAvatar/CAvatar.vue';

const propsData = [
  { name: 'value', desc: '显示值 (Value)', type: 'string | number', default: '-' },
  { name: 'max', desc: '最大值 (Max Value)', type: 'number', default: '-' },
  { name: 'isDot', desc: '小圆点 (Dot)', type: 'boolean', default: 'false' },
  { name: 'type', desc: '类型 (Type)', type: 'primary | success | warning | danger | info', default: 'danger' },
];

const slotsData = [
  { name: 'default', desc: '徽标包裹的目标元素' },
];

const code = `
<CBadge :value="12">
  <CButton>评论</CButton>
</CBadge>

<CBadge :value="100" :max="99">
  <CButton>回复</CButton>
</CBadge>

<CBadge is-dot>
  <CAvatar shape="square" text="User" />
</CBadge>
`;
</script>

<template>
  <CDoc 
    title="Badge 徽标" 
    description="出现在按钮、图标旁的数字或状态标记。素雅主题下为极简圆点，华丽主题下为宝石镶嵌风格。"
    :props-data="propsData"
    :slots-data="slotsData"
    :code="code"
  >
    <div class="demo-row">
      <CBadge :value="12">
        <CButton>评论 (Comments)</CButton>
      </CBadge>

      <CBadge :value="3" type="primary">
        <CButton>消息 (Messages)</CButton>
      </CBadge>

      <CBadge :value="100" :max="99">
        <CButton>热度 (Hot)</CButton>
      </CBadge>
      
      <CBadge value="new" type="warning">
        <CButton>新品 (New)</CButton>
      </CBadge>
    </div>

    <div class="demo-row">
      <CBadge is-dot>
        <CAvatar shape="square" text="User" />
      </CBadge>

      <CBadge is-dot type="success">
        <CButton size="small">在线 (Online)</CButton>
      </CBadge>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;
}
</style>
