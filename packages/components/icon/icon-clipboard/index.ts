import type { App } from 'vue';
import _IconClipboard from './icon-clipboard.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClipboard.name = getComponentsPrefix() + _IconClipboard.name;

const IconClipboard = Object.assign(_IconClipboard, {
  install: (app: App) => {
    app.component(_IconClipboard.name, _IconClipboard);
  }
});

export default IconClipboard;