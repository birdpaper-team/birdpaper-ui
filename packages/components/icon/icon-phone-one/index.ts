import type { App } from 'vue';
import _IconPhoneOne from './icon-phone-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneOne.name = getComponentsPrefix() + _IconPhoneOne.name;

const IconPhoneOne = Object.assign(_IconPhoneOne, {
  install: (app: App) => {
    app.component(_IconPhoneOne.name, _IconPhoneOne);
  }
});

export default IconPhoneOne;