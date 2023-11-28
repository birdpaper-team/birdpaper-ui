import type { App } from 'vue';
import _IconScaleOne from './icon-scale-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScaleOne.name = getComponentsPrefix() + _IconScaleOne.name;

const IconScaleOne = Object.assign(_IconScaleOne, {
  install: (app: App) => {
    app.component(_IconScaleOne.name, _IconScaleOne);
  }
});

export default IconScaleOne;