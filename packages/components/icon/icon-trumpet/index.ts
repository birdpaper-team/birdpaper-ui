import type { App } from 'vue';
import _IconTrumpet from './icon-trumpet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTrumpet.name = getComponentsPrefix() + _IconTrumpet.name;

const IconTrumpet = Object.assign(_IconTrumpet, {
  install: (app: App) => {
    app.component(_IconTrumpet.name, _IconTrumpet);
  }
});

export default IconTrumpet;