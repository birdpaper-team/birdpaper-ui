import type { App } from 'vue';
import _IconCrossRingTwo from './icon-cross-ring-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCrossRingTwo.name = getComponentsPrefix() + _IconCrossRingTwo.name;

const IconCrossRingTwo = Object.assign(_IconCrossRingTwo, {
  install: (app: App) => {
    app.component(_IconCrossRingTwo.name, _IconCrossRingTwo);
  }
});

export default IconCrossRingTwo;