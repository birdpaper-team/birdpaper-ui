import type { App } from 'vue';
import _IconMessagePrivacy from './icon-message-privacy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessagePrivacy.name = getComponentsPrefix() + _IconMessagePrivacy.name;

const IconMessagePrivacy = Object.assign(_IconMessagePrivacy, {
  install: (app: App) => {
    app.component(_IconMessagePrivacy.name, _IconMessagePrivacy);
  }
});

export default IconMessagePrivacy;