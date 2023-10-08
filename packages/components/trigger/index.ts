import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import _trigger from "./src/trigger";

_trigger.name = getComponentsPrefix() + _trigger.name;

const Trigger = Object.assign(_trigger, {
  install: (app: App) => {
    app.component(_trigger.name, _trigger);
  },
});

export type TriggerInstance = InstanceType<typeof _trigger>;
export default Trigger;
