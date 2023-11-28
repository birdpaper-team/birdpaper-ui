import type { App } from 'vue';
import _IconArrowLeftDown from './icon-arrow-left-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowLeftDown.name = getComponentsPrefix() + _IconArrowLeftDown.name;

const IconArrowLeftDown = Object.assign(_IconArrowLeftDown, {
  install: (app: App) => {
    app.component(_IconArrowLeftDown.name, _IconArrowLeftDown);
  }
});

export default IconArrowLeftDown;