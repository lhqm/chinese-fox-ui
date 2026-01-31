<script setup lang="ts">
type Node = { label: string; children?: Node[]; expanded?: boolean; checked?: boolean };
const props = defineProps<{ data: Node[]; checkable?: boolean }>();
const emit = defineEmits<{ (e: 'change', checked: Node[]): void }>();
const toggle = (n: Node) => { n.expanded = !n.expanded; };
const setCheckedRecursive = (n: Node, val: boolean) => {
  n.checked = val;
  if (n.children) n.children.forEach(c => setCheckedRecursive(c, val));
};
const isIndeterminate = (n: Node) => {
  if (!n.children || n.children.length === 0) return false;
  const total = n.children.length;
  const checked = n.children.filter(c => c.checked).length;
  return checked > 0 && checked < total;
};
const handleCheck = (n: Node, val: boolean) => {
  setCheckedRecursive(n, val);
  emit('change', collectChecked(props.data));
};
const collectChecked = (list: Node[]): Node[] => {
  const out: Node[] = [];
  const walk = (arr: Node[]) => {
    arr.forEach(n => {
      if (n.checked) out.push(n);
      if (n.children) walk(n.children);
    });
  };
  walk(list);
  return out;
};
</script>

<template>
  <ul class="c-tree">
    <li v-for="(n, i) in props.data" :key="i" class="c-tree__node">
      <div class="c-tree__line">
        <span class="c-tree__arrow" :class="{ 'is-open': n.expanded }" @click="toggle(n)">▶</span>
        <input v-if="props.checkable" type="checkbox"
               class="c-tree__checkbox"
               :checked="!!n.checked"
               :data-indeterminate="isIndeterminate(n) ? '1' : ''"
               @change="handleCheck(n, ($event.target as HTMLInputElement).checked)" />
        <span class="c-tree__label" @click="toggle(n)">{{ n.label }}</span>
      </div>
      <CTree v-if="n.children && n.expanded" :data="n.children" :checkable="props.checkable" @change="$emit('change', $event)" />
    </li>
  </ul>
</template>

<style scoped>
.c-tree{list-style:none;margin:0;padding-left:16px}
.c-tree__node{margin:6px 0}
.c-tree__line{display:inline-flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px}
.c-tree__arrow{display:inline-block;transition:transform .2s ease;cursor:pointer}
.c-tree__arrow.is-open{transform:rotate(90deg)}
.c-tree__label{color:var(--cf-color-text);cursor:pointer}
.c-tree__checkbox{width:14px;height:14px;border:1px solid var(--cf-color-border);border-radius:2px}
.c-tree__checkbox[data-indeterminate="1"]{appearance:none;background:linear-gradient(180deg,var(--cf-color-border),var(--cf-color-border));}
[data-theme="huali"] .c-tree__line{border:1px solid var(--cf-color-primary)}
</style>
