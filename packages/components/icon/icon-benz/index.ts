import type { App } from 'vue';
import _IconBenz from './icon-benz.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBenz.name = getComponentsPrefix() + _IconBenz.name;

const IconBenz = Object.assign(_IconBenz, {
  install: (app: App) => {
    app.component(_IconBenz.name, _IconBenz);
  }
});

export default IconBenz;