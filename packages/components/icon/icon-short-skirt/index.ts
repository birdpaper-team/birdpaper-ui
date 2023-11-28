import type { App } from 'vue';
import _IconShortSkirt from './icon-short-skirt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconShortSkirt.name = getComponentsPrefix() + _IconShortSkirt.name;

const IconShortSkirt = Object.assign(_IconShortSkirt, {
  install: (app: App) => {
    app.component(_IconShortSkirt.name, _IconShortSkirt);
  }
});

export default IconShortSkirt;