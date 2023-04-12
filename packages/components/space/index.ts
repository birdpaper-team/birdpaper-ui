import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import _space from "./src/space";

_space.name = getComponentsPrefix() + _space.name;

const Space = Object.assign(_space, {
  install: (app: App) => {
    app.component(_space.name, _space);
  },
});

export type SpaceInstance = InstanceType<typeof _space>;
export default Space;
