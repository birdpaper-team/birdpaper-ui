import type { App } from 'vue';
import _IconNewComputer from './icon-new-computer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNewComputer.name = getComponentsPrefix() + _IconNewComputer.name;

const IconNewComputer = Object.assign(_IconNewComputer, {
  install: (app: App) => {
    app.component(_IconNewComputer.name, _IconNewComputer);
  }
});

export default IconNewComputer;