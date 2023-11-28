import type { App } from 'vue';
import _IconVipLine from './icon-vip-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVipLine.name = getComponentsPrefix() + _IconVipLine.name;

const IconVipLine = Object.assign(_IconVipLine, {
  install: (app: App) => {
    app.component(_IconVipLine.name, _IconVipLine);
  }
});

export default IconVipLine;