import { App } from "vue";
import _empty from "./src/empty.vue";
import { getComponentsPrefix } from "../../utils/config";

_empty.name = getComponentsPrefix() + _empty.name;

const Empty = Object.assign(_empty, {
  install: (app: App) => {
    app.component(_empty.name, _empty);
  },
});

export type EmptyInstance = InstanceType<typeof _empty>;
export default Empty;
