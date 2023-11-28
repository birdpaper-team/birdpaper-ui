import type { App } from 'vue';
import _IconBreadMachine from './icon-bread-machine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBreadMachine.name = getComponentsPrefix() + _IconBreadMachine.name;

const IconBreadMachine = Object.assign(_IconBreadMachine, {
  install: (app: App) => {
    app.component(_IconBreadMachine.name, _IconBreadMachine);
  }
});

export default IconBreadMachine;