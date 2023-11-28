import type { App } from 'vue';
import _IconSend from './icon-send.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSend.name = getComponentsPrefix() + _IconSend.name;

const IconSend = Object.assign(_IconSend, {
  install: (app: App) => {
    app.component(_IconSend.name, _IconSend);
  }
});

export default IconSend;