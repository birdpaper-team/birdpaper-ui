import type { App } from 'vue';
import _IconFlirt from './icon-flirt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlirt.name = getComponentsPrefix() + _IconFlirt.name;

const IconFlirt = Object.assign(_IconFlirt, {
  install: (app: App) => {
    app.component(_IconFlirt.name, _IconFlirt);
  }
});

export default IconFlirt;