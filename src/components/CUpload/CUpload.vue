<script setup lang="ts">
const props = defineProps<{
  accept?: string;
  multiple?: boolean;
}>();

const emit = defineEmits<{
  (e: 'change', files: FileList): void;
}>();

const onChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (input.files) emit('change', input.files);
};
</script>

<template>
  <label class="c-upload">
    <input class="c-upload__input" type="file" :accept="props.accept" :multiple="props.multiple" @change="onChange" />
    <span class="c-upload__btn">选择文件</span>
  </label>
</template>

<style scoped>
.c-upload {
  display: inline-flex;
  align-items: center;
  position: relative;
}
.c-upload__input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}
.c-upload__btn {
  padding: 6px 14px;
  border: 1px solid var(--cf-color-border);
  border-radius: 6px;
  background: var(--cf-color-surface);
  color: var(--cf-color-text);
}
[data-theme="huali"] .c-upload__btn {
  border-color: var(--cf-color-primary);
  color: var(--cf-color-primary);
}
</style>
