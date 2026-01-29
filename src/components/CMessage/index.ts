import { createVNode, render } from 'vue';
import type { VNode } from 'vue';
import CMessageConstructor from './CMessage.vue';

type MessageType = 'success' | 'warning' | 'info' | 'error';

interface MessageOptions {
  message: string;
  type?: MessageType;
  duration?: number;
}

const instances: any[] = [];
let seed = 1;

const CMessage = (options: MessageOptions | string) => {
  if (typeof options === 'string') {
    options = { message: options };
  }

  const id = `message_${seed++}`;
  const container = document.createElement('div');
  
  // Calculate offset
  let verticalOffset = 20;
  instances.forEach(instance => {
    verticalOffset += (instance.el?.offsetHeight || 0) + 16;
  });

  const props = {
    ...options,
    id,
    top: verticalOffset,
    onClose: () => {
      close(id, userOnClose);
    }
  };

  const userOnClose = (options as any).onClose;

  const vnode = createVNode(CMessageConstructor, props);
  vnode.appContext = CMessage._context; // Link context for provider/inject if needed
  render(vnode, container);
  
  if (container.firstElementChild) {
    document.body.appendChild(container.firstElementChild);
    instances.push({ id, vnode, el: container.firstElementChild });
  }
};

const close = (id: string, userOnClose?: () => void) => {
  const idx = instances.findIndex(instance => instance.id === id);
  if (idx === -1) return;
  
  const instance = instances[idx];
  if (userOnClose) userOnClose();
  
  // Remove from DOM
  const el = instance.el;
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
  
  instances.splice(idx, 1);
  
  // Adjust positions of remaining messages
  let verticalOffset = 20;
  for (let i = 0; i < instances.length; i++) {
    const inst = instances[i];
    inst.vnode.component.props.top = verticalOffset;
    verticalOffset += (inst.el.offsetHeight || 0) + 16;
  }
};

(['success', 'warning', 'info', 'error'] as MessageType[]).forEach(type => {
  (CMessage as any)[type] = (options: MessageOptions | string) => {
    if (typeof options === 'string') {
      options = { message: options };
    }
    return CMessage({ ...options, type });
  };
});

CMessage._context = null;

export default CMessage;
