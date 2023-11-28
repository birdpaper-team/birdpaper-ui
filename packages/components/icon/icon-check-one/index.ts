import type { App } from 'vue';
import _IconCheckOne from './icon-check-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCheckOne.name = getComponentsPrefix() + _IconCheckOne.name;

const IconCheckOne = Object.assign(_IconCheckOne, {
  install: (app: App) => {
    app.component(_IconCheckOne.name, _IconCheckOne);
  }
});

export default IconCheckOne;