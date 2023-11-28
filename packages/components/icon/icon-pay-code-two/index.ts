import type { App } from 'vue';
import _IconPayCodeTwo from './icon-pay-code-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPayCodeTwo.name = getComponentsPrefix() + _IconPayCodeTwo.name;

const IconPayCodeTwo = Object.assign(_IconPayCodeTwo, {
  install: (app: App) => {
    app.component(_IconPayCodeTwo.name, _IconPayCodeTwo);
  }
});

export default IconPayCodeTwo;