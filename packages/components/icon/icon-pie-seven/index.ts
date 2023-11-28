import type { App } from 'vue';
import _IconPieSeven from './icon-pie-seven.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPieSeven.name = getComponentsPrefix() + _IconPieSeven.name;

const IconPieSeven = Object.assign(_IconPieSeven, {
  install: (app: App) => {
    app.component(_IconPieSeven.name, _IconPieSeven);
  }
});

export default IconPieSeven;