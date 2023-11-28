import type { App } from 'vue';
import _IconCruise from './icon-cruise.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCruise.name = getComponentsPrefix() + _IconCruise.name;

const IconCruise = Object.assign(_IconCruise, {
  install: (app: App) => {
    app.component(_IconCruise.name, _IconCruise);
  }
});

export default IconCruise;