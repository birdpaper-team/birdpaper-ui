import type { App } from 'vue';
import _IconNinePointsConnected from './icon-nine-points-connected.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNinePointsConnected.name = getComponentsPrefix() + _IconNinePointsConnected.name;

const IconNinePointsConnected = Object.assign(_IconNinePointsConnected, {
  install: (app: App) => {
    app.component(_IconNinePointsConnected.name, _IconNinePointsConnected);
  }
});

export default IconNinePointsConnected;