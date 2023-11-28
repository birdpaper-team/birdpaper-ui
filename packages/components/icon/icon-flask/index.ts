import type { App } from 'vue';
import _IconFlask from './icon-flask.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFlask.name = getComponentsPrefix() + _IconFlask.name;

const IconFlask = Object.assign(_IconFlask, {
  install: (app: App) => {
    app.component(_IconFlask.name, _IconFlask);
  }
});

export default IconFlask;