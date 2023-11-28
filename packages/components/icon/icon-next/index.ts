import type { App } from 'vue';
import _IconNext from './icon-next.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNext.name = getComponentsPrefix() + _IconNext.name;

const IconNext = Object.assign(_IconNext, {
  install: (app: App) => {
    app.component(_IconNext.name, _IconNext);
  }
});

export default IconNext;