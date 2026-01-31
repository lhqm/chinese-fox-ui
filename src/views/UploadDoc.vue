<script setup lang="ts">
import { ref } from 'vue';
import CDoc from '../components/CDoc/CDoc.vue';
import CUpload from '../components/CUpload/CUpload.vue';

const files = ref<File[]>([]);
const handleChange = (list: FileList) => {
  files.value = Array.from(list);
};
</script>

<template>
  <CDoc 
    title="Upload 上传" 
    description="选择本地文件并读取列表。"
    :props-data="[
      { name: 'accept', desc: '类型过滤', type: 'string', default: '-' },
      { name: 'multiple', desc: '是否多选', type: 'boolean', default: 'false' }
    ]"
    :events-data="[
      { name: 'change', desc: '文件变更', params: 'files: FileList' }
    ]"
  >
    <div class="demo-col">
      <CUpload accept="image/*" multiple @change="handleChange" />
      <ul>
        <li v-for="f in files" :key="f.name">{{ f.name }} ({{ Math.round(f.size/1024) }} KB)</li>
      </ul>
    </div>
  </CDoc>
</template>

<style scoped>
.demo-col { display: flex; flex-direction: column; gap: 12px; }
</style>
