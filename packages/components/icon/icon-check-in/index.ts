import type { App } from 'vue';
import _IconCheckIn from './icon-check-in.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheckIn.name = getComponentsPrefix() + _IconCheckIn.name;

const IconCheckIn = Object.assign(_IconCheckIn, {
  install: (app: App) => {
    app.component(_IconCheckIn.name, _IconCheckIn);
  }
});

export default IconCheckIn;