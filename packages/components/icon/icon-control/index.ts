import type { App } from 'vue';
import _IconControl from './icon-control.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconControl.name = getComponentsPrefix() + _IconControl.name;

const IconControl = Object.assign(_IconControl, {
  install: (app: App) => {
    app.component(_IconControl.name, _IconControl);
  }
});

export default IconControl;