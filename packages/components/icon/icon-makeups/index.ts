import type { App } from 'vue';
import _IconMakeups from './icon-makeups.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMakeups.name = getComponentsPrefix() + _IconMakeups.name;

const IconMakeups = Object.assign(_IconMakeups, {
  install: (app: App) => {
    app.component(_IconMakeups.name, _IconMakeups);
  }
});

export default IconMakeups;