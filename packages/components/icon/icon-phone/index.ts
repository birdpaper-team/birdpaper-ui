import type { App } from 'vue';
import _IconPhone from './icon-phone.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhone.name = getComponentsPrefix() + _IconPhone.name;

const IconPhone = Object.assign(_IconPhone, {
  install: (app: App) => {
    app.component(_IconPhone.name, _IconPhone);
  }
});

export default IconPhone;