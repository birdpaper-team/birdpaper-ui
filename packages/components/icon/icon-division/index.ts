import type { App } from 'vue';
import _IconDivision from './icon-division.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDivision.name = getComponentsPrefix() + _IconDivision.name;

const IconDivision = Object.assign(_IconDivision, {
  install: (app: App) => {
    app.component(_IconDivision.name, _IconDivision);
  }
});

export default IconDivision;