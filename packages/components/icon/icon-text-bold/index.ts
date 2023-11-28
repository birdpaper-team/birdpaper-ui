import type { App } from 'vue';
import _IconTextBold from './icon-text-bold.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTextBold.name = getComponentsPrefix() + _IconTextBold.name;

const IconTextBold = Object.assign(_IconTextBold, {
  install: (app: App) => {
    app.component(_IconTextBold.name, _IconTextBold);
  }
});

export default IconTextBold;