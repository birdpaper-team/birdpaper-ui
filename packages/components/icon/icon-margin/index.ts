import type { App } from 'vue';
import _IconMargin from './icon-margin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMargin.name = getComponentsPrefix() + _IconMargin.name;

const IconMargin = Object.assign(_IconMargin, {
  install: (app: App) => {
    app.component(_IconMargin.name, _IconMargin);
  }
});

export default IconMargin;