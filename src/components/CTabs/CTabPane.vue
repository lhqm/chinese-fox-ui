<script setup lang="ts">
import { inject, computed } from 'vue';

const props = defineProps<{
  label: string;
  name: string | number;
}>();

const tabsContext = inject<{ currentName: { value: string | number } }>('tabsContext');

const active = computed(() => {
  return tabsContext?.currentName.value === props.name;
});
</script>

<template>
  <div v-show="active" class="c-tab-pane">
    <slot></slot>
  </div>
</template>
