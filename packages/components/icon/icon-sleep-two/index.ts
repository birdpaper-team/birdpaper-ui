import type { App } from 'vue';
import _IconSleepTwo from './icon-sleep-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSleepTwo.name = getComponentsPrefix() + _IconSleepTwo.name;

const IconSleepTwo = Object.assign(_IconSleepTwo, {
  install: (app: App) => {
    app.component(_IconSleepTwo.name, _IconSleepTwo);
  }
});

export default IconSleepTwo;