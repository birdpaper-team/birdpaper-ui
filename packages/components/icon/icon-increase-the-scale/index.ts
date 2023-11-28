import type { App } from 'vue';
import _IconIncreaseTheScale from './icon-increase-the-scale.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIncreaseTheScale.name = getComponentsPrefix() + _IconIncreaseTheScale.name;

const IconIncreaseTheScale = Object.assign(_IconIncreaseTheScale, {
  install: (app: App) => {
    app.component(_IconIncreaseTheScale.name, _IconIncreaseTheScale);
  }
});

export default IconIncreaseTheScale;