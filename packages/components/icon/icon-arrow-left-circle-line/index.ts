import type { App } from 'vue';
import _IconArrowLeftCircleLine from './icon-arrow-left-circle-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArrowLeftCircleLine.name = getComponentsPrefix() + _IconArrowLeftCircleLine.name;

const IconArrowLeftCircleLine = Object.assign(_IconArrowLeftCircleLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftCircleLine.name, _IconArrowLeftCircleLine);
  }
});

export default IconArrowLeftCircleLine;