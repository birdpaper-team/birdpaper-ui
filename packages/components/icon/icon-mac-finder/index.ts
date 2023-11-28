import type { App } from 'vue';
import _IconMacFinder from './icon-mac-finder.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMacFinder.name = getComponentsPrefix() + _IconMacFinder.name;

const IconMacFinder = Object.assign(_IconMacFinder, {
  install: (app: App) => {
    app.component(_IconMacFinder.name, _IconMacFinder);
  }
});

export default IconMacFinder;