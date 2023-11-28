import type { App } from 'vue';
import _IconOther from './icon-other.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOther.name = getComponentsPrefix() + _IconOther.name;

const IconOther = Object.assign(_IconOther, {
  install: (app: App) => {
    app.component(_IconOther.name, _IconOther);
  }
});

export default IconOther;