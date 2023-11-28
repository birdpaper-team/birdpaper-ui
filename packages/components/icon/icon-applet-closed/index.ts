import type { App } from 'vue';
import _IconAppletClosed from './icon-applet-closed.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAppletClosed.name = getComponentsPrefix() + _IconAppletClosed.name;

const IconAppletClosed = Object.assign(_IconAppletClosed, {
  install: (app: App) => {
    app.component(_IconAppletClosed.name, _IconAppletClosed);
  }
});

export default IconAppletClosed;