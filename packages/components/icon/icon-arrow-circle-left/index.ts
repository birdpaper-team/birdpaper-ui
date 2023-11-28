import type { App } from 'vue';
import _IconArrowCircleLeft from './icon-arrow-circle-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowCircleLeft.name = getComponentsPrefix() + _IconArrowCircleLeft.name;

const IconArrowCircleLeft = Object.assign(_IconArrowCircleLeft, {
  install: (app: App) => {
    app.component(_IconArrowCircleLeft.name, _IconArrowCircleLeft);
  }
});

export default IconArrowCircleLeft;