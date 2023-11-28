import type { App } from 'vue';
import _IconGoblet from './icon-goblet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoblet.name = getComponentsPrefix() + _IconGoblet.name;

const IconGoblet = Object.assign(_IconGoblet, {
  install: (app: App) => {
    app.component(_IconGoblet.name, _IconGoblet);
  }
});

export default IconGoblet;