import type { App } from 'vue';
import _IconHeadwear from './icon-headwear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeadwear.name = getComponentsPrefix() + _IconHeadwear.name;

const IconHeadwear = Object.assign(_IconHeadwear, {
  install: (app: App) => {
    app.component(_IconHeadwear.name, _IconHeadwear);
  }
});

export default IconHeadwear;