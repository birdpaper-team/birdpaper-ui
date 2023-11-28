import type { App } from 'vue';
import _IconFishing from './icon-fishing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFishing.name = getComponentsPrefix() + _IconFishing.name;

const IconFishing = Object.assign(_IconFishing, {
  install: (app: App) => {
    app.component(_IconFishing.name, _IconFishing);
  }
});

export default IconFishing;