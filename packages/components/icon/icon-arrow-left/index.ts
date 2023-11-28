import type { App } from 'vue';
import _IconArrowLeft from './icon-arrow-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowLeft.name = getComponentsPrefix() + _IconArrowLeft.name;

const IconArrowLeft = Object.assign(_IconArrowLeft, {
  install: (app: App) => {
    app.component(_IconArrowLeft.name, _IconArrowLeft);
  }
});

export default IconArrowLeft;