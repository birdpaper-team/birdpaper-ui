import type { App } from 'vue';
import _IconRotationOne from './icon-rotation-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRotationOne.name = getComponentsPrefix() + _IconRotationOne.name;

const IconRotationOne = Object.assign(_IconRotationOne, {
  install: (app: App) => {
    app.component(_IconRotationOne.name, _IconRotationOne);
  }
});

export default IconRotationOne;