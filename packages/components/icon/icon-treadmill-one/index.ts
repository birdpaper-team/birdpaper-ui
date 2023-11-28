import type { App } from 'vue';
import _IconTreadmillOne from './icon-treadmill-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTreadmillOne.name = getComponentsPrefix() + _IconTreadmillOne.name;

const IconTreadmillOne = Object.assign(_IconTreadmillOne, {
  install: (app: App) => {
    app.component(_IconTreadmillOne.name, _IconTreadmillOne);
  }
});

export default IconTreadmillOne;