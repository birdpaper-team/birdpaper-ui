import type { App } from 'vue';
import _IconArrowCircleDown from './icon-arrow-circle-down.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowCircleDown.name = getComponentsPrefix() + _IconArrowCircleDown.name;

const IconArrowCircleDown = Object.assign(_IconArrowCircleDown, {
  install: (app: App) => {
    app.component(_IconArrowCircleDown.name, _IconArrowCircleDown);
  }
});

export default IconArrowCircleDown;