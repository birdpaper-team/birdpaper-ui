import type { App } from 'vue';
import _IconLotion from './icon-lotion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLotion.name = getComponentsPrefix() + _IconLotion.name;

const IconLotion = Object.assign(_IconLotion, {
  install: (app: App) => {
    app.component(_IconLotion.name, _IconLotion);
  }
});

export default IconLotion;