<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTheme } from './composables/useTheme';

// Layout Components
import CMenu from './components/CMenu/CMenu.vue';
import CSubMenu from './components/CMenu/CSubMenu.vue';
import CMenuItem from './components/CMenu/CMenuItem.vue';
import CSwitch from './components/CSwitch/CSwitch.vue';
import ChineseKnot from './components/CIcons/ChineseKnot.vue';

// Doc Views
import ButtonDoc from './views/ButtonDoc.vue';
import InputDoc from './views/InputDoc.vue';
import CardDoc from './views/CardDoc.vue';
import TagDoc from './views/TagDoc.vue';
import SwitchDoc from './views/SwitchDoc.vue';
import SelectDoc from './views/SelectDoc.vue';
import DialogDoc from './views/DialogDoc.vue';
import CheckboxDoc from './views/CheckboxDoc.vue';
import RadioDoc from './views/RadioDoc.vue';
import AvatarDoc from './views/AvatarDoc.vue';
import BadgeDoc from './views/BadgeDoc.vue';
import DividerDoc from './views/DividerDoc.vue';
import CollapseDoc from './views/CollapseDoc.vue';
import DrawerDoc from './views/DrawerDoc.vue';
import MenuDoc from './views/MenuDoc.vue';
import TableDoc from './views/TableDoc.vue';
import FormDoc from './views/FormDoc.vue';
import LayoutDoc from './views/LayoutDoc.vue';
import TabsDoc from './views/TabsDoc.vue';
import BreadcrumbDoc from './views/BreadcrumbDoc.vue';
import AlertDoc from './views/AlertDoc.vue';
import MessageDoc from './views/MessageDoc.vue';

const { theme, toggleTheme } = useTheme();

const isHuali = computed({
  get: () => theme.value === 'huali',
  set: () => toggleTheme()
});

const activeMenu = ref('button');

const componentMap: Record<string, any> = {
  layout: LayoutDoc,
  button: ButtonDoc,
  input: InputDoc,
  card: CardDoc,
  tag: TagDoc,
  switch: SwitchDoc,
  select: SelectDoc,
  checkbox: CheckboxDoc,
  radio: RadioDoc,
  avatar: AvatarDoc,
  badge: BadgeDoc,
  divider: DividerDoc,
  collapse: CollapseDoc,
  drawer: DrawerDoc,
  menu: MenuDoc,
  table: TableDoc,
  form: FormDoc,
  dialog: DialogDoc,
  tabs: TabsDoc,
  breadcrumb: BreadcrumbDoc,
  alert: AlertDoc,
  message: MessageDoc,
};

const currentComponent = computed(() => componentMap[activeMenu.value]);

const handleMenuSelect = (index: string) => {
  activeMenu.value = index;
  window.scrollTo(0, 0);
};
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-left">
        <ChineseKnot class="logo-icon" />
        <h1 class="logo-text">Chinese Fox UI <span class="version">v0.1.0</span></h1>
      </div>
      <div class="header-right">
        <span class="theme-text">{{ theme === 'suya' ? '点墨江山 (素雅)' : '雄伟壮丽 (华丽)' }}</span>
        <CSwitch v-model="isHuali" />
      </div>
    </header>

    <div class="main-container">
      <aside class="sidebar">
        <CMenu mode="vertical" :default-active="activeMenu" @select="handleMenuSelect">
          <CSubMenu title="通用 (General)">
            <CMenuItem index="layout">Layout 布局</CMenuItem>
            <CMenuItem index="button">Button 按钮</CMenuItem>
          </CSubMenu>

          <CSubMenu title="表单 (Data Entry)">
            <CMenuItem index="form">Form 表单</CMenuItem>
            <CMenuItem index="input">Input 输入框</CMenuItem>
            <CMenuItem index="select">Select 选择器</CMenuItem>
            <CMenuItem index="checkbox">Checkbox 多选框</CMenuItem>
            <CMenuItem index="radio">Radio 单选框</CMenuItem>
            <CMenuItem index="switch">Switch 开关</CMenuItem>
          </CSubMenu>

          <CSubMenu title="数据 (Data Display)">
            <CMenuItem index="table">Table 表格</CMenuItem>
            <CMenuItem index="card">Card 卡片</CMenuItem>
            <CMenuItem index="tag">Tag 标签</CMenuItem>
            <CMenuItem index="avatar">Avatar 头像</CMenuItem>
            <CMenuItem index="badge">Badge 徽标</CMenuItem>
            <CMenuItem index="collapse">Collapse 折叠面板</CMenuItem>
          </CSubMenu>

          <CSubMenu title="导航 (Navigation)">
            <CMenuItem index="menu">Menu 导航菜单</CMenuItem>
            <CMenuItem index="tabs">Tabs 标签页</CMenuItem>
            <CMenuItem index="breadcrumb">Breadcrumb 面包屑</CMenuItem>
            <CMenuItem index="drawer">Drawer 抽屉</CMenuItem>
          </CSubMenu>

          <CSubMenu title="反馈 (Feedback)">
            <CMenuItem index="dialog">Dialog 对话框</CMenuItem>
            <CMenuItem index="alert">Alert 警告</CMenuItem>
            <CMenuItem index="message">Message 消息提示</CMenuItem>
          </CSubMenu>

          <CSubMenu title="其他 (Others)">
            <CMenuItem index="divider">Divider 分割线</CMenuItem>
          </CSubMenu>
        </CMenu>
      </aside>

      <main class="content">
        <Transition name="fade" mode="out-in">
          <component :is="currentComponent" :key="activeMenu" />
        </Transition>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--cf-color-bg);
  color: var(--cf-color-text);
  transition: var(--cf-transition);
}

.app-header {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid var(--cf-color-border);
  background-color: var(--cf-color-surface);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: var(--cf-color-primary);
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  font-family: var(--cf-font-family);
  margin: 0;
}

.version {
  font-size: 12px;
  font-weight: normal;
  color: var(--cf-color-text-secondary);
  margin-left: 8px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-text {
  font-size: 14px;
  color: var(--cf-color-text-secondary);
}

.main-container {
  display: flex;
  flex: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.sidebar {
  width: 260px;
  border-right: 1px solid var(--cf-color-border);
  background-color: var(--cf-color-surface);
  overflow-y: auto;
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px);
}

.content {
  flex: 1;
  padding: 40px;
  overflow-x: hidden;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

[data-theme="huali"] .app-header {
  border-bottom: 2px solid #E60012;
}

[data-theme="huali"] .sidebar {
  border-right: 2px solid #E60012;
}
</style>
