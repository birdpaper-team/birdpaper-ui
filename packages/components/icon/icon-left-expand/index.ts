import type { App } from 'vue';
import _IconLeftExpand from './icon-left-expand.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLeftExpand.name = getComponentsPrefix() + _IconLeftExpand.name;

const IconLeftExpand = Object.assign(_IconLeftExpand, {
  install: (app: App) => {
    app.component(_IconLeftExpand.name, _IconLeftExpand);
  }
});

export default IconLeftExpand;