import type { App } from 'vue';
import _IconXingfuli from './icon-xingfuli.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconXingfuli.name = getComponentsPrefix() + _IconXingfuli.name;

const IconXingfuli = Object.assign(_IconXingfuli, {
  install: (app: App) => {
    app.component(_IconXingfuli.name, _IconXingfuli);
  }
});

export default IconXingfuli;