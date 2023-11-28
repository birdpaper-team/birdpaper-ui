import type { App } from 'vue';
import _IconMailOpen from './icon-mail-open.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMailOpen.name = getComponentsPrefix() + _IconMailOpen.name;

const IconMailOpen = Object.assign(_IconMailOpen, {
  install: (app: App) => {
    app.component(_IconMailOpen.name, _IconMailOpen);
  }
});

export default IconMailOpen;