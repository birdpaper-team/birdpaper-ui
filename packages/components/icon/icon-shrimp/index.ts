import type { App } from 'vue';
import _IconShrimp from './icon-shrimp.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShrimp.name = getComponentsPrefix() + _IconShrimp.name;

const IconShrimp = Object.assign(_IconShrimp, {
  install: (app: App) => {
    app.component(_IconShrimp.name, _IconShrimp);
  }
});

export default IconShrimp;