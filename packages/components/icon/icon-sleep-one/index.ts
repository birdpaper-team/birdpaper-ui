import type { App } from 'vue';
import _IconSleepOne from './icon-sleep-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSleepOne.name = getComponentsPrefix() + _IconSleepOne.name;

const IconSleepOne = Object.assign(_IconSleepOne, {
  install: (app: App) => {
    app.component(_IconSleepOne.name, _IconSleepOne);
  }
});

export default IconSleepOne;