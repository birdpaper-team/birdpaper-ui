import type { App } from 'vue';
import _IconReceive from './icon-receive.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReceive.name = getComponentsPrefix() + _IconReceive.name;

const IconReceive = Object.assign(_IconReceive, {
  install: (app: App) => {
    app.component(_IconReceive.name, _IconReceive);
  }
});

export default IconReceive;