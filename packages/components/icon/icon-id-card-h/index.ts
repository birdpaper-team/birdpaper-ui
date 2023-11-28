import type { App } from 'vue';
import _IconIdCardH from './icon-id-card-h.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIdCardH.name = getComponentsPrefix() + _IconIdCardH.name;

const IconIdCardH = Object.assign(_IconIdCardH, {
  install: (app: App) => {
    app.component(_IconIdCardH.name, _IconIdCardH);
  }
});

export default IconIdCardH;