import type { App } from 'vue';
import _IconDamageMap from './icon-damage-map.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDamageMap.name = getComponentsPrefix() + _IconDamageMap.name;

const IconDamageMap = Object.assign(_IconDamageMap, {
  install: (app: App) => {
    app.component(_IconDamageMap.name, _IconDamageMap);
  }
});

export default IconDamageMap;