import type { App } from 'vue';
import _IconThunderbolt from './icon-thunderbolt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThunderbolt.name = getComponentsPrefix() + _IconThunderbolt.name;

const IconThunderbolt = Object.assign(_IconThunderbolt, {
  install: (app: App) => {
    app.component(_IconThunderbolt.name, _IconThunderbolt);
  }
});

export default IconThunderbolt;