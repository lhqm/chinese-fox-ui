import type { App } from 'vue';

// Export selected components for library consumers
export { default as CButton } from './components/CButton/CButton.vue';
export { default as CCard } from './components/CCard/CCard.vue';
export { default as CTag } from './components/CTag/CTag.vue';
export { default as CAvatar } from './components/CAvatar/CAvatar.vue';
export { default as CAlert } from './components/CAlert/CAlert.vue';
export { default as CDrawer } from './components/CDrawer/CDrawer.vue';
export { default as CTabs } from './components/CTabs/CTabs.vue';
export { default as CTabPane } from './components/CTabs/CTabPane.vue';
export { default as CTooltip } from './components/CTooltip/CTooltip.vue';
export { default as CPopover } from './components/CPopover/CPopover.vue';
export { default as CMenu } from './components/CMenu/CMenu.vue';
export { default as CMenuItem } from './components/CMenu/CMenuItem.vue';
export { default as CSubMenu } from './components/CMenu/CSubMenu.vue';
export { default as CLoading } from './components/CLoading/CLoading.vue';
export { default as Loading } from './components/CLoading';

const components = [
  // Core components to auto-register
];

export default {
  install(app: App) {
    // Register selected components globally if desired
    // components.forEach((c: any) => app.component(c.name || c.__name, c));
  }
};

