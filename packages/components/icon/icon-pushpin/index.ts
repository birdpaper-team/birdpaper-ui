import type { App } from 'vue';
import _IconPushpin from './icon-pushpin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPushpin.name = getComponentsPrefix() + _IconPushpin.name;

const IconPushpin = Object.assign(_IconPushpin, {
  install: (app: App) => {
    app.component(_IconPushpin.name, _IconPushpin);
  }
});

export default IconPushpin;