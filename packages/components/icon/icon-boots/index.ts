import type { App } from 'vue';
import _IconBoots from './icon-boots.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBoots.name = getComponentsPrefix() + _IconBoots.name;

const IconBoots = Object.assign(_IconBoots, {
  install: (app: App) => {
    app.component(_IconBoots.name, _IconBoots);
  }
});

export default IconBoots;