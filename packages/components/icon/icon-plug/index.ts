import type { App } from 'vue';
import _IconPlug from './icon-plug.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlug.name = getComponentsPrefix() + _IconPlug.name;

const IconPlug = Object.assign(_IconPlug, {
  install: (app: App) => {
    app.component(_IconPlug.name, _IconPlug);
  }
});

export default IconPlug;