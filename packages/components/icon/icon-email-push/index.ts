import type { App } from 'vue';
import _IconEmailPush from './icon-email-push.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEmailPush.name = getComponentsPrefix() + _IconEmailPush.name;

const IconEmailPush = Object.assign(_IconEmailPush, {
  install: (app: App) => {
    app.component(_IconEmailPush.name, _IconEmailPush);
  }
});

export default IconEmailPush;