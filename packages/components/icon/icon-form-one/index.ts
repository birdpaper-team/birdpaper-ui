import type { App } from 'vue';
import _IconFormOne from './icon-form-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFormOne.name = getComponentsPrefix() + _IconFormOne.name;

const IconFormOne = Object.assign(_IconFormOne, {
  install: (app: App) => {
    app.component(_IconFormOne.name, _IconFormOne);
  }
});

export default IconFormOne;