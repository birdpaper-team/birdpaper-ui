import type { App } from 'vue';
import _IconSendEmail from './icon-send-email.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSendEmail.name = getComponentsPrefix() + _IconSendEmail.name;

const IconSendEmail = Object.assign(_IconSendEmail, {
  install: (app: App) => {
    app.component(_IconSendEmail.name, _IconSendEmail);
  }
});

export default IconSendEmail;