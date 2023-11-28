import type { App } from 'vue';
import _IconLinkInterrupt from './icon-link-interrupt.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkInterrupt.name = getComponentsPrefix() + _IconLinkInterrupt.name;

const IconLinkInterrupt = Object.assign(_IconLinkInterrupt, {
  install: (app: App) => {
    app.component(_IconLinkInterrupt.name, _IconLinkInterrupt);
  }
});

export default IconLinkInterrupt;