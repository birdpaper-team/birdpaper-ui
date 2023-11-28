import type { App } from 'vue';
import _IconChicken from './icon-chicken.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChicken.name = getComponentsPrefix() + _IconChicken.name;

const IconChicken = Object.assign(_IconChicken, {
  install: (app: App) => {
    app.component(_IconChicken.name, _IconChicken);
  }
});

export default IconChicken;