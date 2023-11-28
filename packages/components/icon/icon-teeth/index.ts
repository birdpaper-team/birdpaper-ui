import type { App } from 'vue';
import _IconTeeth from './icon-teeth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTeeth.name = getComponentsPrefix() + _IconTeeth.name;

const IconTeeth = Object.assign(_IconTeeth, {
  install: (app: App) => {
    app.component(_IconTeeth.name, _IconTeeth);
  }
});

export default IconTeeth;