import type { App } from 'vue';
import _IconArrowCircleUp from './icon-arrow-circle-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowCircleUp.name = getComponentsPrefix() + _IconArrowCircleUp.name;

const IconArrowCircleUp = Object.assign(_IconArrowCircleUp, {
  install: (app: App) => {
    app.component(_IconArrowCircleUp.name, _IconArrowCircleUp);
  }
});

export default IconArrowCircleUp;