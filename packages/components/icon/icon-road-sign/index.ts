import type { App } from 'vue';
import _IconRoadSign from './icon-road-sign.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoadSign.name = getComponentsPrefix() + _IconRoadSign.name;

const IconRoadSign = Object.assign(_IconRoadSign, {
  install: (app: App) => {
    app.component(_IconRoadSign.name, _IconRoadSign);
  }
});

export default IconRoadSign;