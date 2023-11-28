import type { App } from 'vue';
import _IconAtSign from './icon-at-sign.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAtSign.name = getComponentsPrefix() + _IconAtSign.name;

const IconAtSign = Object.assign(_IconAtSign, {
  install: (app: App) => {
    app.component(_IconAtSign.name, _IconAtSign);
  }
});

export default IconAtSign;