import type { App } from 'vue';
import _IconCloseCircleLine from './icon-close-circle-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloseCircleLine.name = getComponentsPrefix() + _IconCloseCircleLine.name;

const IconCloseCircleLine = Object.assign(_IconCloseCircleLine, {
  install: (app: App) => {
    app.component(_IconCloseCircleLine.name, _IconCloseCircleLine);
  }
});

export default IconCloseCircleLine;