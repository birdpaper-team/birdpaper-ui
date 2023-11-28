import type { App } from 'vue';
import _IconMessageUnread from './icon-message-unread.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMessageUnread.name = getComponentsPrefix() + _IconMessageUnread.name;

const IconMessageUnread = Object.assign(_IconMessageUnread, {
  install: (app: App) => {
    app.component(_IconMessageUnread.name, _IconMessageUnread);
  }
});

export default IconMessageUnread;