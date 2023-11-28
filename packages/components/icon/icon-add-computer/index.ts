import type { App } from 'vue';
import _IconAddComputer from './icon-add-computer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddComputer.name = getComponentsPrefix() + _IconAddComputer.name;

const IconAddComputer = Object.assign(_IconAddComputer, {
  install: (app: App) => {
    app.component(_IconAddComputer.name, _IconAddComputer);
  }
});

export default IconAddComputer;