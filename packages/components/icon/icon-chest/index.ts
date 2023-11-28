import type { App } from 'vue';
import _IconChest from './icon-chest.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChest.name = getComponentsPrefix() + _IconChest.name;

const IconChest = Object.assign(_IconChest, {
  install: (app: App) => {
    app.component(_IconChest.name, _IconChest);
  }
});

export default IconChest;