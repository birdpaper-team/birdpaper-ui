import type { App } from 'vue';
import _IconScissors from './icon-scissors.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScissors.name = getComponentsPrefix() + _IconScissors.name;

const IconScissors = Object.assign(_IconScissors, {
  install: (app: App) => {
    app.component(_IconScissors.name, _IconScissors);
  }
});

export default IconScissors;