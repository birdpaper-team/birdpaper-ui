import type { App } from 'vue';
import _IconComputer from './icon-computer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconComputer.name = getComponentsPrefix() + _IconComputer.name;

const IconComputer = Object.assign(_IconComputer, {
  install: (app: App) => {
    app.component(_IconComputer.name, _IconComputer);
  }
});

export default IconComputer;