import type { App } from 'vue';
import _IconPhoneTwo from './icon-phone-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneTwo.name = getComponentsPrefix() + _IconPhoneTwo.name;

const IconPhoneTwo = Object.assign(_IconPhoneTwo, {
  install: (app: App) => {
    app.component(_IconPhoneTwo.name, _IconPhoneTwo);
  }
});

export default IconPhoneTwo;