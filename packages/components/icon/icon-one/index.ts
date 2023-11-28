import type { App } from 'vue';
import _IconOne from './icon-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOne.name = getComponentsPrefix() + _IconOne.name;

const IconOne = Object.assign(_IconOne, {
  install: (app: App) => {
    app.component(_IconOne.name, _IconOne);
  }
});

export default IconOne;