import type { App } from 'vue';
import _IconMail from './icon-mail.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMail.name = getComponentsPrefix() + _IconMail.name;

const IconMail = Object.assign(_IconMail, {
  install: (app: App) => {
    app.component(_IconMail.name, _IconMail);
  }
});

export default IconMail;