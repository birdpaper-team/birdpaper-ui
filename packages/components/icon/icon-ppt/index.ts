import type { App } from 'vue';
import _IconPpt from './icon-ppt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPpt.name = getComponentsPrefix() + _IconPpt.name;

const IconPpt = Object.assign(_IconPpt, {
  install: (app: App) => {
    app.component(_IconPpt.name, _IconPpt);
  }
});

export default IconPpt;