import type { App } from 'vue';
import _IconCherry from './icon-cherry.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCherry.name = getComponentsPrefix() + _IconCherry.name;

const IconCherry = Object.assign(_IconCherry, {
  install: (app: App) => {
    app.component(_IconCherry.name, _IconCherry);
  }
});

export default IconCherry;