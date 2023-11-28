import type { App } from 'vue';
import _IconHeartRate from './icon-heart-rate.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeartRate.name = getComponentsPrefix() + _IconHeartRate.name;

const IconHeartRate = Object.assign(_IconHeartRate, {
  install: (app: App) => {
    app.component(_IconHeartRate.name, _IconHeartRate);
  }
});

export default IconHeartRate;