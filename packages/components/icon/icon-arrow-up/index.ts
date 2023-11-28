import type { App } from 'vue';
import _IconArrowUp from './icon-arrow-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowUp.name = getComponentsPrefix() + _IconArrowUp.name;

const IconArrowUp = Object.assign(_IconArrowUp, {
  install: (app: App) => {
    app.component(_IconArrowUp.name, _IconArrowUp);
  }
});

export default IconArrowUp;