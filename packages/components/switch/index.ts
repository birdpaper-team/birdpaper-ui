import { App } from "vue";
import _switch from "./src/switch.vue";
import { getComponentsPrefix } from "../../utils/config";

_switch.name = getComponentsPrefix() + _switch.name;

const Switch = Object.assign(_switch, {
  install: (app: App) => {
    app.component(_switch.name, _switch);
  },
});

export type SwitchInstance = InstanceType<typeof _switch>;
export default Switch;
