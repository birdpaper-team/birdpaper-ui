import type { App } from 'vue';
import _IconIdCardV from './icon-id-card-v.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIdCardV.name = getComponentsPrefix() + _IconIdCardV.name;

const IconIdCardV = Object.assign(_IconIdCardV, {
  install: (app: App) => {
    app.component(_IconIdCardV.name, _IconIdCardV);
  }
});

export default IconIdCardV;