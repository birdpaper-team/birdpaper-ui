import type { App } from 'vue';
import _IconPreschool from './icon-preschool.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPreschool.name = getComponentsPrefix() + _IconPreschool.name;

const IconPreschool = Object.assign(_IconPreschool, {
  install: (app: App) => {
    app.component(_IconPreschool.name, _IconPreschool);
  }
});

export default IconPreschool;