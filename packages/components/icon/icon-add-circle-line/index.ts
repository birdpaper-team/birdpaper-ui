import type { App } from 'vue';
import _IconAddCircleLine from './icon-add-circle-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddCircleLine.name = getComponentsPrefix() + _IconAddCircleLine.name;

const IconAddCircleLine = Object.assign(_IconAddCircleLine, {
  install: (app: App) => {
    app.component(_IconAddCircleLine.name, _IconAddCircleLine);
  }
});

export default IconAddCircleLine;