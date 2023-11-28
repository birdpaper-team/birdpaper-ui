import type { App } from 'vue';
import _IconExpandDownOne from './icon-expand-down-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExpandDownOne.name = getComponentsPrefix() + _IconExpandDownOne.name;

const IconExpandDownOne = Object.assign(_IconExpandDownOne, {
  install: (app: App) => {
    app.component(_IconExpandDownOne.name, _IconExpandDownOne);
  }
});

export default IconExpandDownOne;