import type { App } from 'vue';
import _IconPowder from './icon-powder.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPowder.name = getComponentsPrefix() + _IconPowder.name;

const IconPowder = Object.assign(_IconPowder, {
  install: (app: App) => {
    app.component(_IconPowder.name, _IconPowder);
  }
});

export default IconPowder;