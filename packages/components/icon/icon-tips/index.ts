import type { App } from 'vue';
import _IconTips from './icon-tips.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTips.name = getComponentsPrefix() + _IconTips.name;

const IconTips = Object.assign(_IconTips, {
  install: (app: App) => {
    app.component(_IconTips.name, _IconTips);
  }
});

export default IconTips;