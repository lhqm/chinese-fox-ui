<script setup lang="ts">
import CDoc from '../components/CDoc/CDoc.vue';
import CAvatar from '../components/CAvatar/CAvatar.vue';

const propsData = [
  { name: 'src', desc: '图片地址 (Image Source)', type: 'string', default: '-' },
  { name: 'alt', desc: '替代文本 (Alt Text)', type: 'string', default: '-' },
  { name: 'size', desc: '尺寸 (Size)', type: 'number | small | medium | large', default: 'medium' },
  { name: 'shape', desc: '形状 (Shape)', type: 'circle | square', default: 'circle' },
  { name: 'text', desc: '文字头像 (Text)', type: 'string', default: '?' },
];

const code = `
<CAvatar src="https://..." />
<CAvatar text="User" />
<CAvatar shape="square" size="large" text="Admin" />
`;
</script>

<template>
  <CDoc 
    title="Avatar 头像" 
    description="用来代表用户或事物。素雅主题下为简约圆形，华丽主题下为带有金红边框的肖像画框。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-row">
      <div class="demo-col">
        <p>Circle (Default)</p>
        <div class="avatars">
          <CAvatar size="large" text="大" />
          <CAvatar size="medium" text="中" />
          <CAvatar size="small" text="小" />
        </div>
      </div>

      <div class="demo-col">
        <p>Square</p>
        <div class="avatars">
          <CAvatar shape="square" size="large" text="Large" />
          <CAvatar shape="square" size="medium" text="Medium" />
          <CAvatar shape="square" size="small" text="Small" />
        </div>
      </div>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-row {
  display: flex;
  gap: 40px;
}
.demo-col p {
  margin-bottom: 12px;
  color: var(--cf-color-text-secondary);
}
.avatars {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
