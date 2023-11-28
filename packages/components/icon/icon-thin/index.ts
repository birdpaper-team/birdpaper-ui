import type { App } from 'vue';
import _IconThin from './icon-thin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThin.name = getComponentsPrefix() + _IconThin.name;

const IconThin = Object.assign(_IconThin, {
  install: (app: App) => {
    app.component(_IconThin.name, _IconThin);
  }
});

export default IconThin;