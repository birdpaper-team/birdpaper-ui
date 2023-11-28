import type { App } from 'vue';
import _IconToxins from './icon-toxins.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconToxins.name = getComponentsPrefix() + _IconToxins.name;

const IconToxins = Object.assign(_IconToxins, {
  install: (app: App) => {
    app.component(_IconToxins.name, _IconToxins);
  }
});

export default IconToxins;