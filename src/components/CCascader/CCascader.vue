<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

interface CascaderOption {
  label: string;
  value: string | number;
  children?: CascaderOption[];
}

const props = defineProps<{
  modelValue?: Array<string | number>;
  options: CascaderOption[];
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Array<string | number>): void;
  (e: 'change', value: Array<string | number>): void;
  (e: 'visible-change', value: boolean): void;
}>();

const isOpen = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const dropdownPos = ref<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });

const activePath = ref<Array<string | number>>(props.modelValue || []);

watch(() => props.modelValue, (val) => {
  if (val) activePath.value = [...val];
});

const selectedLabel = computed(() => {
  if (!props.modelValue || props.modelValue.length === 0) return '';
  const labels: string[] = [];
  let level = 0;
  let currentList: CascaderOption[] | undefined = props.options;
  while (currentList && level < props.modelValue.length) {
    const v = props.modelValue[level];
    const found = currentList.find(item => item.value === v);
    if (found) {
      labels.push(found.label);
      currentList = found.children;
    } else {
      break;
    }
    level++;
  }
  return labels.join(' / ');
});

const panelData = computed(() => {
  const panels: CascaderOption[][] = [];
  let currentList: CascaderOption[] | undefined = props.options;
  let level = 0;
  while (currentList && level <= activePath.value.length) {
    panels.push(currentList);
    const val = activePath.value[level];
    const next = currentList.find(item => item.value === val);
    currentList = next?.children;
    level++;
  }
  return panels;
});

const openDropdown = () => {
  isOpen.value = true;
  emit('visible-change', true);
  updateDropdownPos();
};

const closeDropdown = () => {
  isOpen.value = false;
  emit('visible-change', false);
};

const toggleDropdown = () => {
  isOpen.value ? closeDropdown() : openDropdown();
};

const updateDropdownPos = () => {
  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  dropdownPos.value = {
    top: rect.bottom + window.scrollY + 8,
    left: rect.left + window.scrollX,
    width: rect.width
  };
};

const handleClickOutside = (event: MouseEvent) => {
  if (triggerRef.value && !triggerRef.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', updateDropdownPos);
  window.addEventListener('scroll', updateDropdownPos, true);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', updateDropdownPos);
  window.removeEventListener('scroll', updateDropdownPos, true);
});

const handleSelect = (opt: CascaderOption, level: number) => {
  const nextPath = activePath.value.slice(0, level);
  nextPath[level] = opt.value;
  activePath.value = nextPath;
  if (!opt.children || opt.children.length === 0) {
    emit('update:modelValue', nextPath);
    emit('change', nextPath);
    closeDropdown();
  }
};

const handleHover = (opt: CascaderOption, level: number) => {
  const nextPath = activePath.value.slice(0, level);
  nextPath[level] = opt.value;
  activePath.value = nextPath;
};
</script>

<template>
  <div class="c-cascader">
    <div class="c-cascader__trigger" ref="triggerRef" @click="toggleDropdown">
      <span v-if="selectedLabel" class="c-cascader__value">{{ selectedLabel }}</span>
      <span v-else class="c-cascader__placeholder">{{ placeholder || '请选择' }}</span>
      <span class="c-cascader__arrow">▼</span>
    </div>

    <Teleport to="body">
      <Transition name="select-fade">
        <div 
          v-if="isOpen" 
          class="c-cascader__dropdown" 
          :style="{ top: dropdownPos.top + 'px', left: dropdownPos.left + 'px', width: dropdownPos.width + 'px' }"
        >
          <div class="c-cascader__panel" v-for="(list, idx) in panelData" :key="idx">
            <div 
              v-for="opt in list" 
              :key="opt.value" 
              class="c-cascader__option"
              :class="{ 'is-active': activePath[idx] === opt.value }"
              @mouseenter="handleHover(opt, idx)"
              @click="handleSelect(opt, idx)"
            >
              <span class="c-cascader__option-text">{{ opt.label }}</span>
              <span class="c-cascader__option-arrow" v-if="opt.children && opt.children.length">›</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.c-cascader {
  position: relative;
  width: 100%;
  min-width: 240px;
  font-family: var(--cf-font-family);
}

.c-cascader__trigger {
  padding: 10px 12px;
  border: 1px solid var(--cf-color-border);
  border-radius: var(--cf-border-radius);
  background: var(--cf-color-surface);
  color: var(--cf-color-text);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--cf-transition);
}

.c-cascader__placeholder {
  color: var(--cf-color-text-secondary);
  opacity: 0.7;
}

.c-cascader__arrow {
  font-size: 0.8em;
  transition: transform 0.3s ease;
  color: var(--cf-color-text-secondary);
}

.c-cascader__dropdown {
  position: absolute;
  margin-top: 8px;
  background: var(--cf-color-surface);
  border: 1px solid var(--cf-color-border);
  border-radius: var(--cf-border-radius);
  box-shadow: var(--cf-shadow-hover);
  z-index: 1300;
  overflow: hidden;
  display: flex;
}

.c-cascader__panel {
  width: 200px;
  max-height: 260px;
  overflow-y: auto;
  border-right: 1px solid var(--cf-color-border);
}

.c-cascader__option {
  padding: 10px 12px;
  cursor: pointer;
  transition: var(--cf-transition);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-cascader__option:hover {
  background-color: rgba(0,0,0,0.03);
  color: var(--cf-color-primary);
}

.c-cascader__option.is-active {
  background-color: rgba(0,0,0,0.04);
  color: var(--cf-color-primary);
  font-weight: 600;
}

/* Suya */
[data-theme="suya"] .c-cascader__trigger {
  border: 1px solid rgba(0,0,0,0.1);
  background: rgba(255,255,255,0.6);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
[data-theme="suya"] .c-cascader__dropdown {
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

/* Huali */
[data-theme="huali"] .c-cascader__trigger {
  background: #fff;
  border: 1px solid var(--cf-color-primary);
  color: var(--cf-color-primary);
  box-shadow: 0 2px 4px var(--cf-shadow);
}
[data-theme="huali"] .c-cascader__dropdown {
  background: #fff;
  border: 1px solid var(--cf-color-primary);
  box-shadow: 0 4px 12px var(--cf-shadow);
  border-radius: 4px;
}
[data-theme="huali"] .c-cascader__option:hover,
[data-theme="huali"] .c-cascader__option.is-active {
  background: rgba(194, 62, 62, 0.08);
  color: var(--cf-color-primary);
}

/* Transitions */
.select-fade-enter-active,
.select-fade-leave-active {
  transition: all 0.3s ease;
}
.select-fade-enter-from,
.select-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
