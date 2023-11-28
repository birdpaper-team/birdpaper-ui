import type { App } from 'vue';
import _IconProportionalScaling from './icon-proportional-scaling.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconProportionalScaling.name = getComponentsPrefix() + _IconProportionalScaling.name;

const IconProportionalScaling = Object.assign(_IconProportionalScaling, {
  install: (app: App) => {
    app.component(_IconProportionalScaling.name, _IconProportionalScaling);
  }
});

export default IconProportionalScaling;