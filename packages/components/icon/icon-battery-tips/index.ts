import type { App } from 'vue';
import _IconBatteryTips from './icon-battery-tips.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBatteryTips.name = getComponentsPrefix() + _IconBatteryTips.name;

const IconBatteryTips = Object.assign(_IconBatteryTips, {
  install: (app: App) => {
    app.component(_IconBatteryTips.name, _IconBatteryTips);
  }
});

export default IconBatteryTips;