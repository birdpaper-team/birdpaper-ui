import type { App } from 'vue';
import _IconConfig from './icon-config.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConfig.name = getComponentsPrefix() + _IconConfig.name;

const IconConfig = Object.assign(_IconConfig, {
  install: (app: App) => {
    app.component(_IconConfig.name, _IconConfig);
  }
});

export default IconConfig;