<script setup lang="ts">
type Item = { id: string | number; label: string; category: string };
type Category = { key: string; title?: string };
const props = defineProps<{ items: Item[]; categories: Category[] }>();
const emit = defineEmits<{ (e: 'update:items', items: Item[]): void }>();
let dragItem: Item | null = null;
const onDragStart = (item: Item) => { dragItem = item; };
const onDropTo = (cat: string) => {
  if (!dragItem) return;
  const idx = props.items.findIndex(i => i.id === dragItem!.id);
  if (idx >= 0) {
    props.items[idx] = { ...props.items[idx], category: cat };
    emit('update:items', props.items.slice());
  }
  dragItem = null;
};
const onReorder = (targetId: string | number) => {
  if (!dragItem) return;
  const from = props.items.findIndex(i => i.id === dragItem!.id);
  const to = props.items.findIndex(i => i.id === targetId);
  if (from < 0 || to < 0 || from === to) return;
  const item = props.items.splice(from, 1)[0];
  props.items.splice(to, 0, item);
  emit('update:items', props.items.slice());
  dragItem = null;
};
</script>

<template>
  <div class="c-drag-area">
    <div v-for="cat in props.categories" :key="cat.key" class="c-drag-area__col"
         @dragover.prevent
         @drop.prevent="onDropTo(cat.key)">
      <div class="c-drag-area__title">{{ cat.title || cat.key }}</div>
      <div class="c-drag-area__list">
        <div v-for="it in props.items.filter(i=>i.category===cat.key)" :key="it.id"
             class="c-drag-area__item"
             draggable="true"
             @dragstart="onDragStart(it)"
             @dragover.prevent
             @drop.prevent="onReorder(it.id)">
          <span>{{ it.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-drag-area{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.c-drag-area__col{border:1px solid var(--cf-color-border);border-radius:8px;background:var(--cf-color-surface);padding:12px;min-height:200px}
.c-drag-area__title{font-size:14px;color:var(--cf-color-text-secondary);margin-bottom:8px}
.c-drag-area__list{display:flex;flex-direction:column;gap:8px}
.c-drag-area__item{border:1px solid var(--cf-color-border);border-radius:6px;padding:8px;background:var(--cf-color-bg);cursor:grab}
[data-theme="huali"] .c-drag-area__col{border-color:var(--cf-color-primary)}
[data-theme="huali"] .c-drag-area__item{border-color:var(--cf-color-primary)}
@media (max-width: 767px){.c-drag-area{grid-template-columns:1fr}}
</style>
