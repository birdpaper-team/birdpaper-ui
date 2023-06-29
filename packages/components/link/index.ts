import { App } from "vue";
import _link from "./src/link.vue";
import { getComponentsPrefix } from "../../utils/config";

_link.name = getComponentsPrefix() + _link.name;

const Link = Object.assign(_link, {
  install: (app: App) => {
    app.component(_link.name, _link);
  },
});

export default Link;
