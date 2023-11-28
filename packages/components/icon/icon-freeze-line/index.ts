import type { App } from 'vue';
import _IconFreezeLine from './icon-freeze-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFreezeLine.name = getComponentsPrefix() + _IconFreezeLine.name;

const IconFreezeLine = Object.assign(_IconFreezeLine, {
  install: (app: App) => {
    app.component(_IconFreezeLine.name, _IconFreezeLine);
  }
});

export default IconFreezeLine;