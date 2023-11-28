import type { App } from 'vue';
import _IconRedCross from './icon-red-cross.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRedCross.name = getComponentsPrefix() + _IconRedCross.name;

const IconRedCross = Object.assign(_IconRedCross, {
  install: (app: App) => {
    app.component(_IconRedCross.name, _IconRedCross);
  }
});

export default IconRedCross;