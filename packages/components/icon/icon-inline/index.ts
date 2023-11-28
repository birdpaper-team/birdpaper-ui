import type { App } from 'vue';
import _IconInline from './icon-inline.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInline.name = getComponentsPrefix() + _IconInline.name;

const IconInline = Object.assign(_IconInline, {
  install: (app: App) => {
    app.component(_IconInline.name, _IconInline);
  }
});

export default IconInline;