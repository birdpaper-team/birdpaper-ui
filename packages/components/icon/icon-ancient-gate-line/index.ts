import type { App } from 'vue';
import _IconAncientGateLine from './icon-ancient-gate-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAncientGateLine.name = getComponentsPrefix() + _IconAncientGateLine.name;

const IconAncientGateLine = Object.assign(_IconAncientGateLine, {
  install: (app: App) => {
    app.component(_IconAncientGateLine.name, _IconAncientGateLine);
  }
});

export default IconAncientGateLine;