import type { App } from 'vue';
import _IconArrowRightDoubleLine from './icon-arrow-right-double-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowRightDoubleLine.name = getComponentsPrefix() + _IconArrowRightDoubleLine.name;

const IconArrowRightDoubleLine = Object.assign(_IconArrowRightDoubleLine, {
  install: (app: App) => {
    app.component(_IconArrowRightDoubleLine.name, _IconArrowRightDoubleLine);
  }
});

export default IconArrowRightDoubleLine;