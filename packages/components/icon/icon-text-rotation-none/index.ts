import type { App } from 'vue';
import _IconTextRotationNone from './icon-text-rotation-none.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextRotationNone.name = getComponentsPrefix() + _IconTextRotationNone.name;

const IconTextRotationNone = Object.assign(_IconTextRotationNone, {
  install: (app: App) => {
    app.component(_IconTextRotationNone.name, _IconTextRotationNone);
  }
});

export default IconTextRotationNone;