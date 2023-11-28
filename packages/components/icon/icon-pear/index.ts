import type { App } from 'vue';
import _IconPear from './icon-pear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPear.name = getComponentsPrefix() + _IconPear.name;

const IconPear = Object.assign(_IconPear, {
  install: (app: App) => {
    app.component(_IconPear.name, _IconPear);
  }
});

export default IconPear;