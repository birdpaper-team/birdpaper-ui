import { App } from "vue";
import _icon from "./src/icon.vue";
import { getComponentsPrefix } from "../../utils/config";

_icon.name = getComponentsPrefix() + _icon.name;

const Icon = Object.assign(_icon, {
  install: (app: App) => {
    app.component(_icon.name, _icon);
  },
});

export type IconInstance = InstanceType<typeof _icon>;
export default Icon;
