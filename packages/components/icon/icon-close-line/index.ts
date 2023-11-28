import type { App } from 'vue';
import _IconCloseLine from './icon-close-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloseLine.name = getComponentsPrefix() + _IconCloseLine.name;

const IconCloseLine = Object.assign(_IconCloseLine, {
  install: (app: App) => {
    app.component(_IconCloseLine.name, _IconCloseLine);
  }
});

export default IconCloseLine;