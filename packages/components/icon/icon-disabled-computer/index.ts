import type { App } from 'vue';
import _IconDisabledComputer from './icon-disabled-computer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDisabledComputer.name = getComponentsPrefix() + _IconDisabledComputer.name;

const IconDisabledComputer = Object.assign(_IconDisabledComputer, {
  install: (app: App) => {
    app.component(_IconDisabledComputer.name, _IconDisabledComputer);
  }
});

export default IconDisabledComputer;