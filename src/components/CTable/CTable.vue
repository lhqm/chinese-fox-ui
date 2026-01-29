<script setup lang="ts">
import { computed } from 'vue';

interface Column {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

const props = defineProps<{
  data: any[];
  columns: Column[];
  stripe?: boolean;
  border?: boolean;
}>();

const emit = defineEmits<{
  (e: 'row-click', row: any, index: number): void;
}>();

const handleRowClick = (row: any, index: number) => {
  emit('row-click', row, index);
};
</script>

<template>
  <div 
    class="c-table-wrapper"
    :class="{ 
      'c-table--stripe': stripe,
      'c-table--border': border
    }"
  >
    <table class="c-table">
      <thead>
        <tr>
          <th 
            v-for="col in columns" 
            :key="col.key"
            :style="{ width: col.width, textAlign: col.align || 'left' }"
          >
            {{ col.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(row, rowIndex) in data" 
          :key="rowIndex"
          @click="handleRowClick(row, rowIndex)"
        >
          <td 
            v-for="col in columns" 
            :key="col.key"
            :style="{ textAlign: col.align || 'left' }"
          >
            <slot :name="col.key" :row="row" :index="rowIndex">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.c-table-wrapper {
  width: 100%;
  overflow-x: auto;
  font-family: var(--cf-font-family);
  color: var(--cf-color-text);
  background-color: var(--cf-color-bg);
}

.c-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;
}

.c-table th,
.c-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--cf-color-border);
  transition: background-color 0.3s;
}

.c-table th {
  font-weight: 500;
  text-align: left;
  color: var(--cf-color-text-secondary);
  background-color: var(--cf-color-bg-secondary, #fafafa);
}

/* Hover Effect */
.c-table tbody tr:hover td {
  background-color: rgba(0, 0, 0, 0.02);
}

/* Stripe */
.c-table--stripe tbody tr:nth-child(even) td {
  background-color: rgba(0, 0, 0, 0.01);
}

/* Border */
.c-table--border .c-table th,
.c-table--border .c-table td {
  border-right: 1px solid var(--cf-color-border);
}
.c-table--border .c-table {
  border-top: 1px solid var(--cf-color-border);
  border-left: 1px solid var(--cf-color-border);
}

/* --- Suya Theme (Ink / Minimalist) --- */
.c-table th {
  border-bottom: 2px solid var(--cf-color-border);
}

/* --- Huali Theme (Imperial / Official Records) --- */
[data-theme="huali"] .c-table-wrapper {
  border: 1px solid var(--cf-color-primary);
  border-radius: 4px;
  overflow: hidden;
}

[data-theme="huali"] .c-table th {
  background-color: var(--cf-color-primary);
  color: #fff; /* White text on Red header */
  font-weight: bold;
  border-bottom: 2px solid var(--cf-color-secondary);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

[data-theme="huali"] .c-table td {
  border-bottom: 1px solid rgba(194, 62, 62, 0.1);
  color: #555;
}

[data-theme="huali"] .c-table tbody tr:hover td {
  background-color: rgba(194, 62, 62, 0.05); /* Light hover */
}

[data-theme="huali"] .c-table--stripe tbody tr:nth-child(even) td {
  background-color: rgba(194, 62, 62, 0.02); /* Very light cream for stripe */
}

/* Huali: Add a small decorative corner to the table wrapper if possible, or just keep it clean */
</style>