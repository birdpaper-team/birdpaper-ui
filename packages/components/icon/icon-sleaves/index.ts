import type { App } from 'vue';
import _IconSleaves from './icon-sleaves.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSleaves.name = getComponentsPrefix() + _IconSleaves.name;

const IconSleaves = Object.assign(_IconSleaves, {
  install: (app: App) => {
    app.component(_IconSleaves.name, _IconSleaves);
  }
});

export default IconSleaves;