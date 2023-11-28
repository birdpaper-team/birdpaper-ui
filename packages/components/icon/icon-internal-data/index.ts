import type { App } from 'vue';
import _IconInternalData from './icon-internal-data.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconInternalData.name = getComponentsPrefix() + _IconInternalData.name;

const IconInternalData = Object.assign(_IconInternalData, {
  install: (app: App) => {
    app.component(_IconInternalData.name, _IconInternalData);
  }
});

export default IconInternalData;