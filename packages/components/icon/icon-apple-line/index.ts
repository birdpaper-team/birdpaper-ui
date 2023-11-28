import type { App } from 'vue';
import _IconAppleLine from './icon-apple-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAppleLine.name = getComponentsPrefix() + _IconAppleLine.name;

const IconAppleLine = Object.assign(_IconAppleLine, {
  install: (app: App) => {
    app.component(_IconAppleLine.name, _IconAppleLine);
  }
});

export default IconAppleLine;