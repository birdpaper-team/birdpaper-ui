import { App } from "vue";
import _alert from "./src/alert.vue";
import { getComponentsPrefix } from "../../utils/config";

_alert.name = getComponentsPrefix() + _alert.name;

const Alert = Object.assign(_alert, {
  install: (app: App) => {
    app.component(_alert.name, _alert);
  },
});

export type AlertInstance = InstanceType<typeof _alert>;
export default Alert;
