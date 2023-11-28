import type { App } from 'vue';
import _IconRespect from './icon-respect.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRespect.name = getComponentsPrefix() + _IconRespect.name;

const IconRespect = Object.assign(_IconRespect, {
  install: (app: App) => {
    app.component(_IconRespect.name, _IconRespect);
  }
});

export default IconRespect;