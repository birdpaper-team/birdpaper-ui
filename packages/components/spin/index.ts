import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import _spin from "./src/spin.vue";

_spin.name = getComponentsPrefix() + _spin.name;

const Spin = Object.assign(_spin, {
  install: (app: App) => {
    app.component(_spin.name, _spin);
  },
});

export type SpinInstance = InstanceType<typeof _spin>;
export default Spin;
