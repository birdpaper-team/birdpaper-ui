import type { App } from 'vue';
import _IconPanties from './icon-panties.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPanties.name = getComponentsPrefix() + _IconPanties.name;

const IconPanties = Object.assign(_IconPanties, {
  install: (app: App) => {
    app.component(_IconPanties.name, _IconPanties);
  }
});

export default IconPanties;