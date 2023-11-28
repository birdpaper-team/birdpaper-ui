import type { App } from 'vue';
import _IconArrowCircleRight from './icon-arrow-circle-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowCircleRight.name = getComponentsPrefix() + _IconArrowCircleRight.name;

const IconArrowCircleRight = Object.assign(_IconArrowCircleRight, {
  install: (app: App) => {
    app.component(_IconArrowCircleRight.name, _IconArrowCircleRight);
  }
});

export default IconArrowCircleRight;