import type { App } from 'vue';
import _IconChinesePavilion from './icon-chinese-pavilion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChinesePavilion.name = getComponentsPrefix() + _IconChinesePavilion.name;

const IconChinesePavilion = Object.assign(_IconChinesePavilion, {
  install: (app: App) => {
    app.component(_IconChinesePavilion.name, _IconChinesePavilion);
  }
});

export default IconChinesePavilion;