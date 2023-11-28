import type { App } from 'vue';
import _IconIndeterminateCircleLine from './icon-indeterminate-circle-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIndeterminateCircleLine.name = getComponentsPrefix() + _IconIndeterminateCircleLine.name;

const IconIndeterminateCircleLine = Object.assign(_IconIndeterminateCircleLine, {
  install: (app: App) => {
    app.component(_IconIndeterminateCircleLine.name, _IconIndeterminateCircleLine);
  }
});

export default IconIndeterminateCircleLine;