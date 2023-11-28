import type { App } from 'vue';
import _IconDownOne from './icon-down-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownOne.name = getComponentsPrefix() + _IconDownOne.name;

const IconDownOne = Object.assign(_IconDownOne, {
  install: (app: App) => {
    app.component(_IconDownOne.name, _IconDownOne);
  }
});

export default IconDownOne;