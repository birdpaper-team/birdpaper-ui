import type { App } from 'vue';
import _IconOpen from './icon-open.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOpen.name = getComponentsPrefix() + _IconOpen.name;

const IconOpen = Object.assign(_IconOpen, {
  install: (app: App) => {
    app.component(_IconOpen.name, _IconOpen);
  }
});

export default IconOpen;