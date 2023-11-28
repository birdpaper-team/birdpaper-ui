import type { App } from 'vue';
import _IconMouth from './icon-mouth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMouth.name = getComponentsPrefix() + _IconMouth.name;

const IconMouth = Object.assign(_IconMouth, {
  install: (app: App) => {
    app.component(_IconMouth.name, _IconMouth);
  }
});

export default IconMouth;