import type { App } from 'vue';
import _IconCc from './icon-cc.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCc.name = getComponentsPrefix() + _IconCc.name;

const IconCc = Object.assign(_IconCc, {
  install: (app: App) => {
    app.component(_IconCc.name, _IconCc);
  }
});

export default IconCc;