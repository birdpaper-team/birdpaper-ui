import type { App } from 'vue';
import _IconFireExtinguisher from './icon-fire-extinguisher.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFireExtinguisher.name = getComponentsPrefix() + _IconFireExtinguisher.name;

const IconFireExtinguisher = Object.assign(_IconFireExtinguisher, {
  install: (app: App) => {
    app.component(_IconFireExtinguisher.name, _IconFireExtinguisher);
  }
});

export default IconFireExtinguisher;