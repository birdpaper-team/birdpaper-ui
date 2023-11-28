import type { App } from 'vue';
import _IconCheckSmall from './icon-check-small.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheckSmall.name = getComponentsPrefix() + _IconCheckSmall.name;

const IconCheckSmall = Object.assign(_IconCheckSmall, {
  install: (app: App) => {
    app.component(_IconCheckSmall.name, _IconCheckSmall);
  }
});

export default IconCheckSmall;