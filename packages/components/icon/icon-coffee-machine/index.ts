import type { App } from 'vue';
import _IconCoffeeMachine from './icon-coffee-machine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCoffeeMachine.name = getComponentsPrefix() + _IconCoffeeMachine.name;

const IconCoffeeMachine = Object.assign(_IconCoffeeMachine, {
  install: (app: App) => {
    app.component(_IconCoffeeMachine.name, _IconCoffeeMachine);
  }
});

export default IconCoffeeMachine;