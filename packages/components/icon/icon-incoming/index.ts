import type { App } from 'vue';
import _IconIncoming from './icon-incoming.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIncoming.name = getComponentsPrefix() + _IconIncoming.name;

const IconIncoming = Object.assign(_IconIncoming, {
  install: (app: App) => {
    app.component(_IconIncoming.name, _IconIncoming);
  }
});

export default IconIncoming;