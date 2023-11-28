import type { App } from 'vue';
import _IconArrowRightUp from './icon-arrow-right-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowRightUp.name = getComponentsPrefix() + _IconArrowRightUp.name;

const IconArrowRightUp = Object.assign(_IconArrowRightUp, {
  install: (app: App) => {
    app.component(_IconArrowRightUp.name, _IconArrowRightUp);
  }
});

export default IconArrowRightUp;