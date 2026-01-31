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
import CascaderDoc from './views/CascaderDoc.vue';
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
import TooltipDoc from './views/TooltipDoc.vue';
import PopoverDoc from './views/PopoverDoc.vue';
import WatermarkDoc from './views/WatermarkDoc.vue';
import StampDoc from './views/StampDoc.vue';
import ScrollCarouselDoc from './views/ScrollCarouselDoc.vue';
import FanCollapseDoc from './views/FanCollapseDoc.vue';
import ProgressQinDoc from './views/ProgressQinDoc.vue';
import CoupletBannerDoc from './views/CoupletBannerDoc.vue';
import PoemCardDoc from './views/PoemCardDoc.vue';
import ScrollPagerDoc from './views/ScrollPagerDoc.vue';
import LoadingDoc from './views/LoadingDoc.vue';
import ThemeSwitchDoc from './views/ThemeSwitchDoc.vue';
import CThemeTransition from './components/CThemeTransition/CThemeTransition.vue';
import TimelineDoc from './views/TimelineDoc.vue';
import MasonryDoc from './views/MasonryDoc.vue';
import SkeletonDoc from './views/SkeletonDoc.vue';
import CResponsiveDemo from './components/CResponsiveDemo/CResponsiveDemo.vue';
import BackTopDoc from './views/BackTopDoc.vue';
import StatisticDoc from './views/StatisticDoc.vue';
import TreeDoc from './views/TreeDoc.vue';
import UploadDoc from './views/UploadDoc.vue';
import ShuJianDescDoc from './views/ShuJianDescDoc.vue';
import DragDoc from './views/DragDoc.vue';

const { theme, toggleTheme, setTheme } = useTheme();

const isHuali = computed({
  get: () => theme.value === 'huali',
  set: () => handleThemeToggle()
});

const activeMenu = ref('button');

const overlayShow = ref(false);
const overlayPoem = ref('');
const overlayIcon = ref('');
const overlayToTheme = ref<'suya' | 'huali'>('suya');
const handleThemeToggle = () => {
  const next = theme.value === 'suya' ? 'huali' : 'suya';
  overlayToTheme.value = next;
  if (next === 'suya') {
    overlayPoem.value = '醉后不知天在水，满船清梦压星河。';
    overlayIcon.value = '/src/assets/古风物件，中国风，古代兵器，剑，古剑.svg';
  } else {
    overlayPoem.value = '泪眼问花花不语，乱红飞过秋千去。';
    overlayIcon.value = '/src/assets/古风物件，中国风，古代乐器，箜篌.svg';
  }
  overlayShow.value = true;
};
const onTransitionFinish = () => {
  setTheme(overlayToTheme.value);
  overlayShow.value = false;
};

const componentMap: Record<string, any> = {
  layout: LayoutDoc,
  button: ButtonDoc,
  input: InputDoc,
  card: CardDoc,
  tag: TagDoc,
  switch: SwitchDoc,
  select: SelectDoc,
  cascader: CascaderDoc,
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
  tooltip: TooltipDoc,
  popover: PopoverDoc,
  watermark: WatermarkDoc,
  stamp: StampDoc,
  scrollcarousel: ScrollCarouselDoc,
  fancollapse: FanCollapseDoc,
  progressqin: ProgressQinDoc,
  coupletbanner: CoupletBannerDoc,
  poemcard: PoemCardDoc,
  scrollpager: ScrollPagerDoc,
  loading: LoadingDoc,
  themeswitch: ThemeSwitchDoc,
  timeline: TimelineDoc,
  masonry: MasonryDoc,
  skeleton: SkeletonDoc,
  backtop: BackTopDoc,
  statistic: StatisticDoc,
  tree: TreeDoc,
  upload: UploadDoc,
  shujiandesc: ShuJianDescDoc,
  drag: DragDoc,
};

const currentComponent = computed(() => componentMap[activeMenu.value]);

const handleMenuSelect = (index: string) => {
  activeMenu.value = index;
  window.scrollTo(0, 0);
};

const sidebarOpen = ref(false);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
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
        <button class="menu-toggle" @click="toggleSidebar">菜单</button>
      </div>
    </header>

    <div class="main-container">
      <aside class="sidebar" :class="{ 'is-open': sidebarOpen }">
        <CMenu mode="vertical" :default-active="activeMenu" @select="handleMenuSelect">
          <CSubMenu title="通用 (General)">
            <CMenuItem index="layout">Layout 布局</CMenuItem>
            <CMenuItem index="button">Button 按钮</CMenuItem>
            <CMenuItem index="divider">Divider 分割线</CMenuItem>
            <CMenuItem index="coupletbanner">CoupletBanner 对联横幅</CMenuItem>
          </CSubMenu>

          <CSubMenu title="表单 (Data Entry)">
            <CMenuItem index="form">Form 表单</CMenuItem>
            <CMenuItem index="input">Input 输入框</CMenuItem>
            <CMenuItem index="select">Select 选择器</CMenuItem>
            <CMenuItem index="cascader">Cascader 多级联动</CMenuItem>
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
            <CMenuItem index="fancollapse">FanCollapse 折扇面板</CMenuItem>
            <CMenuItem index="scrollcarousel">ScrollCarousel 卷轴轮播</CMenuItem>
            <CMenuItem index="poemcard">PoemCard 诗词卡片</CMenuItem>
            <CMenuItem index="watermark">Watermark 水印</CMenuItem>
            <CMenuItem index="progressqin">ProgressQin 古琴进度</CMenuItem>
            <CMenuItem index="timeline">Timeline 时间轴</CMenuItem>
            <CMenuItem index="masonry">Masonry 瀑布流</CMenuItem>
            <CMenuItem index="statistic">Statistic 统计数值</CMenuItem>
            <CMenuItem index="tree">Tree 树形组件</CMenuItem>
            <CMenuItem index="shujiandesc">ShuJianDesc 书简描述</CMenuItem>
          </CSubMenu>

          <CSubMenu title="导航 (Navigation)">
            <CMenuItem index="menu">Menu 导航菜单</CMenuItem>
            <CMenuItem index="tabs">Tabs 标签页</CMenuItem>
            <CMenuItem index="breadcrumb">Breadcrumb 面包屑</CMenuItem>
            <CMenuItem index="drawer">Drawer 抽屉</CMenuItem>
            <CMenuItem index="scrollpager">ScrollPager 书卷分页</CMenuItem>
          </CSubMenu>

          <CSubMenu title="反馈 (Feedback)">
            <CMenuItem index="dialog">Dialog 对话框</CMenuItem>
            <CMenuItem index="alert">Alert 警告</CMenuItem>
            <CMenuItem index="message">Message 消息提示</CMenuItem>
            <CMenuItem index="tooltip">Tooltip 文字提示</CMenuItem>
            <CMenuItem index="popover">Popover 弹出框</CMenuItem>
            <CMenuItem index="stamp">Stamp 印章</CMenuItem>
          </CSubMenu>

          <CSubMenu title="其他 (Others)">
            <CMenuItem index="loading">Loading 加载</CMenuItem>
            <CMenuItem index="skeleton">Skeleton 骨架屏</CMenuItem>
            <CMenuItem index="themeswitch">ThemeTransition 主题切换动画</CMenuItem>
            <CMenuItem index="backtop">BackTop 回到顶部</CMenuItem>
            <CMenuItem index="upload">Upload 上传</CMenuItem>
            <CMenuItem index="drag">Drag 拖拽</CMenuItem>
          </CSubMenu>
        </CMenu>
      </aside>

      <main class="content">
        <Transition name="screen-switch" mode="out-in">
          <component :is="currentComponent" :key="activeMenu" />
        </Transition>
        <CResponsiveDemo />
        <CThemeTransition
          :show="overlayShow"
          :to-theme="overlayToTheme"
          :poem="overlayPoem"
          :icon-src="overlayIcon"
          :duration-ms="1200"
          @finish="onTransitionFinish"
        />
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
.menu-toggle {
  display: none;
  padding: 6px 10px;
  border: 1px solid var(--cf-color-border);
  background: var(--cf-color-surface);
  border-radius: 6px;
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
  transition: transform 0.3s ease;
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

/* Responsive breakpoints */
@media (max-width: 767px) {
  .logo-text { font-size: 16px; }
  .theme-text { display: none; }
  .menu-toggle { display: inline-block; }
  .main-container {
    max-width: 100%;
    width: 100%;
  }
  .sidebar {
    position: fixed;
    left: 0;
    top: 64px;
    height: calc(100vh - 64px);
    width: 80vw;
    max-width: 280px;
    transform: translateX(-100%);
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    z-index: 101;
  }
  .sidebar.is-open {
    transform: translateX(0);
  }
  .content {
    padding: 16px;
  }
}
@media (min-width: 768px) and (max-width: 1199px) {
  .menu-toggle { display: inline-block; }
  .sidebar {
    width: 220px;
  }
  .content {
    padding: 24px;
  }
}
@media (min-width: 1200px) {
  .menu-toggle { display: none; }
  .sidebar {
    width: 260px;
    transform: none !important;
  }
  .content {
    padding: 40px;
  }
}
</style>
