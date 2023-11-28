import type { App } from 'vue';
import _IconDeskLamp from './icon-desk-lamp.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeskLamp.name = getComponentsPrefix() + _IconDeskLamp.name;

const IconDeskLamp = Object.assign(_IconDeskLamp, {
  install: (app: App) => {
    app.component(_IconDeskLamp.name, _IconDeskLamp);
  }
});

export default IconDeskLamp;