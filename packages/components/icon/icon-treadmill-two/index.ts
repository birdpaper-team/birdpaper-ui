import type { App } from 'vue';
import _IconTreadmillTwo from './icon-treadmill-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTreadmillTwo.name = getComponentsPrefix() + _IconTreadmillTwo.name;

const IconTreadmillTwo = Object.assign(_IconTreadmillTwo, {
  install: (app: App) => {
    app.component(_IconTreadmillTwo.name, _IconTreadmillTwo);
  }
});

export default IconTreadmillTwo;