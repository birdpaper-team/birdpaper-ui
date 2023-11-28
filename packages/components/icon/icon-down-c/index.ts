import type { App } from 'vue';
import _IconDownC from './icon-down-c.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownC.name = getComponentsPrefix() + _IconDownC.name;

const IconDownC = Object.assign(_IconDownC, {
  install: (app: App) => {
    app.component(_IconDownC.name, _IconDownC);
  }
});

export default IconDownC;