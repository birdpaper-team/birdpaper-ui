import { App } from "vue";
import _link from "./src/link.vue";
import { getComponentsPrefix } from "../../utils/config";

_link.name = getComponentsPrefix() + _link.name;

const BpLink = Object.assign(_link, {
  install: (app: App) => {
    app.component(_link.name, _link);
  },
});

export type LinkInstance = InstanceType<typeof _link>;
export default BpLink;
