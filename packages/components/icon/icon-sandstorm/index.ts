import type { App } from 'vue';
import _IconSandstorm from './icon-sandstorm.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSandstorm.name = getComponentsPrefix() + _IconSandstorm.name;

const IconSandstorm = Object.assign(_IconSandstorm, {
  install: (app: App) => {
    app.component(_IconSandstorm.name, _IconSandstorm);
  }
});

export default IconSandstorm;