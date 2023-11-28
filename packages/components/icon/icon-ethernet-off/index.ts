import type { App } from 'vue';
import _IconEthernetOff from './icon-ethernet-off.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEthernetOff.name = getComponentsPrefix() + _IconEthernetOff.name;

const IconEthernetOff = Object.assign(_IconEthernetOff, {
  install: (app: App) => {
    app.component(_IconEthernetOff.name, _IconEthernetOff);
  }
});

export default IconEthernetOff;