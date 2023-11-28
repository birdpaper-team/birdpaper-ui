import type { App } from 'vue';
import _IconDiapersOne from './icon-diapers-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDiapersOne.name = getComponentsPrefix() + _IconDiapersOne.name;

const IconDiapersOne = Object.assign(_IconDiapersOne, {
  install: (app: App) => {
    app.component(_IconDiapersOne.name, _IconDiapersOne);
  }
});

export default IconDiapersOne;