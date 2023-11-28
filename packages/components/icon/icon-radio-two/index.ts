import type { App } from 'vue';
import _IconRadioTwo from './icon-radio-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRadioTwo.name = getComponentsPrefix() + _IconRadioTwo.name;

const IconRadioTwo = Object.assign(_IconRadioTwo, {
  install: (app: App) => {
    app.component(_IconRadioTwo.name, _IconRadioTwo);
  }
});

export default IconRadioTwo;