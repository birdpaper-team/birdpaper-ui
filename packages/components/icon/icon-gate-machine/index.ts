import type { App } from 'vue';
import _IconGateMachine from './icon-gate-machine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGateMachine.name = getComponentsPrefix() + _IconGateMachine.name;

const IconGateMachine = Object.assign(_IconGateMachine, {
  install: (app: App) => {
    app.component(_IconGateMachine.name, _IconGateMachine);
  }
});

export default IconGateMachine;