import type { App } from 'vue';
import _IconMessageFailed from './icon-message-failed.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessageFailed.name = getComponentsPrefix() + _IconMessageFailed.name;

const IconMessageFailed = Object.assign(_IconMessageFailed, {
  install: (app: App) => {
    app.component(_IconMessageFailed.name, _IconMessageFailed);
  }
});

export default IconMessageFailed;