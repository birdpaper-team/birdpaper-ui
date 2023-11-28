import type { App } from 'vue';
import _IconFog from './icon-fog.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFog.name = getComponentsPrefix() + _IconFog.name;

const IconFog = Object.assign(_IconFog, {
  install: (app: App) => {
    app.component(_IconFog.name, _IconFog);
  }
});

export default IconFog;