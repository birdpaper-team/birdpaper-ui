import type { App } from 'vue';
import _IconTextRotationLeft from './icon-text-rotation-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextRotationLeft.name = getComponentsPrefix() + _IconTextRotationLeft.name;

const IconTextRotationLeft = Object.assign(_IconTextRotationLeft, {
  install: (app: App) => {
    app.component(_IconTextRotationLeft.name, _IconTextRotationLeft);
  }
});

export default IconTextRotationLeft;