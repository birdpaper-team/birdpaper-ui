import { App } from "vue";
import _drawer from "./src/drawer.vue";
import { getComponentsPrefix } from "../../utils/config";

_drawer.name = getComponentsPrefix() + _drawer.name;

const Drawer = Object.assign(_drawer, {
  install: (app: App) => {
    app.component(_drawer.name, _drawer);
  },
});

export type DrawerInstance = InstanceType<typeof _drawer>;
export default Drawer;
