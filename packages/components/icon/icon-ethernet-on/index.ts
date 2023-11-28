import type { App } from 'vue';
import _IconEthernetOn from './icon-ethernet-on.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEthernetOn.name = getComponentsPrefix() + _IconEthernetOn.name;

const IconEthernetOn = Object.assign(_IconEthernetOn, {
  install: (app: App) => {
    app.component(_IconEthernetOn.name, _IconEthernetOn);
  }
});

export default IconEthernetOn;