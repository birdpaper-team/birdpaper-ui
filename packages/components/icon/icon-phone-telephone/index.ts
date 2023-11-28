import type { App } from 'vue';
import _IconPhoneTelephone from './icon-phone-telephone.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPhoneTelephone.name = getComponentsPrefix() + _IconPhoneTelephone.name;

const IconPhoneTelephone = Object.assign(_IconPhoneTelephone, {
  install: (app: App) => {
    app.component(_IconPhoneTelephone.name, _IconPhoneTelephone);
  }
});

export default IconPhoneTelephone;