import type { App } from 'vue';
import _IconCurveAdjustment from './icon-curve-adjustment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCurveAdjustment.name = getComponentsPrefix() + _IconCurveAdjustment.name;

const IconCurveAdjustment = Object.assign(_IconCurveAdjustment, {
  install: (app: App) => {
    app.component(_IconCurveAdjustment.name, _IconCurveAdjustment);
  }
});

export default IconCurveAdjustment;