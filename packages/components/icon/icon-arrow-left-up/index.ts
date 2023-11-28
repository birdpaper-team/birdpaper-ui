import type { App } from 'vue';
import _IconArrowLeftUp from './icon-arrow-left-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowLeftUp.name = getComponentsPrefix() + _IconArrowLeftUp.name;

const IconArrowLeftUp = Object.assign(_IconArrowLeftUp, {
  install: (app: App) => {
    app.component(_IconArrowLeftUp.name, _IconArrowLeftUp);
  }
});

export default IconArrowLeftUp;