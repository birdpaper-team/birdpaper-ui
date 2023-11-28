import type { App } from 'vue';
import _IconArrowLeftDoubleLine from './icon-arrow-left-double-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowLeftDoubleLine.name = getComponentsPrefix() + _IconArrowLeftDoubleLine.name;

const IconArrowLeftDoubleLine = Object.assign(_IconArrowLeftDoubleLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftDoubleLine.name, _IconArrowLeftDoubleLine);
  }
});

export default IconArrowLeftDoubleLine;