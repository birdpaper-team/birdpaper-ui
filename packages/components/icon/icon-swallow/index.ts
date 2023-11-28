import type { App } from 'vue';
import _IconSwallow from './icon-swallow.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSwallow.name = getComponentsPrefix() + _IconSwallow.name;

const IconSwallow = Object.assign(_IconSwallow, {
  install: (app: App) => {
    app.component(_IconSwallow.name, _IconSwallow);
  }
});

export default IconSwallow;