import type { App } from 'vue';
import _IconLightning from './icon-lightning.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLightning.name = getComponentsPrefix() + _IconLightning.name;

const IconLightning = Object.assign(_IconLightning, {
  install: (app: App) => {
    app.component(_IconLightning.name, _IconLightning);
  }
});

export default IconLightning;