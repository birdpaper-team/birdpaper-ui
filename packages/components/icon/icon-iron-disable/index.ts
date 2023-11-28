import type { App } from 'vue';
import _IconIronDisable from './icon-iron-disable.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIronDisable.name = getComponentsPrefix() + _IconIronDisable.name;

const IconIronDisable = Object.assign(_IconIronDisable, {
  install: (app: App) => {
    app.component(_IconIronDisable.name, _IconIronDisable);
  }
});

export default IconIronDisable;