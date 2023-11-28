import type { App } from 'vue';
import _IconWashingMachine from './icon-washing-machine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWashingMachine.name = getComponentsPrefix() + _IconWashingMachine.name;

const IconWashingMachine = Object.assign(_IconWashingMachine, {
  install: (app: App) => {
    app.component(_IconWashingMachine.name, _IconWashingMachine);
  }
});

export default IconWashingMachine;