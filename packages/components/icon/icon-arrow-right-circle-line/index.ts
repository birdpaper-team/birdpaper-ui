import type { App } from 'vue';
import _IconArrowRightCircleLine from './icon-arrow-right-circle-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowRightCircleLine.name = getComponentsPrefix() + _IconArrowRightCircleLine.name;

const IconArrowRightCircleLine = Object.assign(_IconArrowRightCircleLine, {
  install: (app: App) => {
    app.component(_IconArrowRightCircleLine.name, _IconArrowRightCircleLine);
  }
});

export default IconArrowRightCircleLine;