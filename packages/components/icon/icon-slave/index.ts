import type { App } from 'vue';
import _IconSlave from './icon-slave.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlave.name = getComponentsPrefix() + _IconSlave.name;

const IconSlave = Object.assign(_IconSlave, {
  install: (app: App) => {
    app.component(_IconSlave.name, _IconSlave);
  }
});

export default IconSlave;