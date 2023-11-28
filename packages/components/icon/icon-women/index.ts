import type { App } from 'vue';
import _IconWomen from './icon-women.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWomen.name = getComponentsPrefix() + _IconWomen.name;

const IconWomen = Object.assign(_IconWomen, {
  install: (app: App) => {
    app.component(_IconWomen.name, _IconWomen);
  }
});

export default IconWomen;