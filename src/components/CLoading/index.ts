import { createVNode, render } from 'vue';
import type { VNode } from 'vue';
import CLoading from './CLoading.vue';

type LoadingInstance = {
  id: string;
  vnode: VNode;
  el: Element;
};

interface LoadingOptions {
  text?: string;
  fullscreen?: boolean;
}

const instances: LoadingInstance[] = [];
let seed = 1;

export const Loading = (options: LoadingOptions = {}) => {
  const id = `loading_${seed++}`;
  const container = document.createElement('div');

  const vnode = createVNode(CLoading, {
    visible: true,
    fullscreen: options.fullscreen ?? false,
    text: options.text,
  });
  (vnode as any).appContext = (Loading as any)._context;
  render(vnode, container);

  const el = container.firstElementChild!;
  document.body.appendChild(el);
  const inst: LoadingInstance = { id, vnode, el };
  instances.push(inst);

  return {
    close: () => {
      try {
        (inst.vnode.component!.props as any).visible = false;
        if (inst.el && inst.el.parentNode) inst.el.parentNode.removeChild(inst.el);
      } finally {
        const idx = instances.findIndex(i => i.id === id);
        if (idx !== -1) instances.splice(idx, 1);
      }
    }
  };
};

(Loading as any)._context = null;

export default Loading;
