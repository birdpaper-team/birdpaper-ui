import type { App } from 'vue';
import _IconAcceptEmail from './icon-accept-email.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAcceptEmail.name = getComponentsPrefix() + _IconAcceptEmail.name;

const IconAcceptEmail = Object.assign(_IconAcceptEmail, {
  install: (app: App) => {
    app.component(_IconAcceptEmail.name, _IconAcceptEmail);
  }
});

export default IconAcceptEmail;