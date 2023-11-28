import type { App } from 'vue';
import _IconShowerHead from './icon-shower-head.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShowerHead.name = getComponentsPrefix() + _IconShowerHead.name;

const IconShowerHead = Object.assign(_IconShowerHead, {
  install: (app: App) => {
    app.component(_IconShowerHead.name, _IconShowerHead);
  }
});

export default IconShowerHead;