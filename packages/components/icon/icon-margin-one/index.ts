import type { App } from 'vue';
import _IconMarginOne from './icon-margin-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMarginOne.name = getComponentsPrefix() + _IconMarginOne.name;

const IconMarginOne = Object.assign(_IconMarginOne, {
  install: (app: App) => {
    app.component(_IconMarginOne.name, _IconMarginOne);
  }
});

export default IconMarginOne;