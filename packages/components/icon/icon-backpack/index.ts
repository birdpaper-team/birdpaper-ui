import type { App } from 'vue';
import _IconBackpack from './icon-backpack.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBackpack.name = getComponentsPrefix() + _IconBackpack.name;

const IconBackpack = Object.assign(_IconBackpack, {
  install: (app: App) => {
    app.component(_IconBackpack.name, _IconBackpack);
  }
});

export default IconBackpack;