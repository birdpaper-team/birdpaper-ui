import type { App } from 'vue';
import _IconAddOne from './icon-add-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddOne.name = getComponentsPrefix() + _IconAddOne.name;

const IconAddOne = Object.assign(_IconAddOne, {
  install: (app: App) => {
    app.component(_IconAddOne.name, _IconAddOne);
  }
});

export default IconAddOne;