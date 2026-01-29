<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CForm from '../components/CForm/CForm.vue';
import CFormItem from '../components/CForm/CFormItem.vue';
import CInput from '../components/CInput/CInput.vue';
import CSelect from '../components/CSelect/CSelect.vue';
import CCheckbox from '../components/CCheckbox/CCheckbox.vue';
import CButton from '../components/CButton/CButton.vue';

const form = ref({
  name: '',
  region: '',
  delivery: false
});

const options = [
  { label: '魏 (Wei)', value: 'wei' },
  { label: '蜀 (Shu)', value: 'shu' }
];

const propsData = [
  { name: 'model', desc: '表单数据对象 (Model)', type: 'object', default: '-' },
  { name: 'labelWidth', desc: '标签宽度 (Label Width)', type: 'string', default: '-' },
  { name: 'labelPosition', desc: '标签对齐方式 (Label Position)', type: 'left | right | top', default: 'right' },
];

const code = `
<CForm :model="form" label-width="80px">
  <CFormItem label="活动名称">
    <CInput v-model="form.name" />
  </CFormItem>
</CForm>
`;
</script>

<template>
  <CDoc 
    title="Form 表单" 
    description="由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。"
    :props-data="propsData"
    :code="code"
  >
    <div class="demo-section">
      <CForm :model="form" label-width="120px">
        <CFormItem label="名称 (Name)">
          <CInput v-model="form.name" placeholder="请输入活动名称" />
        </CFormItem>
        <CFormItem label="区域 (Zone)">
          <CSelect v-model="form.region" :options="options" placeholder="请选择活动区域" />
        </CFormItem>
        <CFormItem label="配送 (Delivery)">
          <CCheckbox v-model="form.delivery">即时配送 (Instant)</CCheckbox>
        </CFormItem>
        <CFormItem>
          <CButton variant="primary">立即创建 (Create)</CButton>
          <CButton style="margin-left: 10px">取消 (Cancel)</CButton>
        </CFormItem>
      </CForm>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-section {
  max-width: 600px;
}
</style>
