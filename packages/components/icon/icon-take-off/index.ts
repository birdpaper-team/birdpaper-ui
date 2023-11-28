import type { App } from 'vue';
import _IconTakeOff from './icon-take-off.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTakeOff.name = getComponentsPrefix() + _IconTakeOff.name;

const IconTakeOff = Object.assign(_IconTakeOff, {
  install: (app: App) => {
    app.component(_IconTakeOff.name, _IconTakeOff);
  }
});

export default IconTakeOff;