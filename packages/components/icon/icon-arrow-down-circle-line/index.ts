import type { App } from 'vue';
import _IconArrowDownCircleLine from './icon-arrow-down-circle-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowDownCircleLine.name = getComponentsPrefix() + _IconArrowDownCircleLine.name;

const IconArrowDownCircleLine = Object.assign(_IconArrowDownCircleLine, {
  install: (app: App) => {
    app.component(_IconArrowDownCircleLine.name, _IconArrowDownCircleLine);
  }
});

export default IconArrowDownCircleLine;