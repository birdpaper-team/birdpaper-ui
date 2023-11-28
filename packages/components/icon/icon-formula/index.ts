import type { App } from 'vue';
import _IconFormula from './icon-formula.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFormula.name = getComponentsPrefix() + _IconFormula.name;

const IconFormula = Object.assign(_IconFormula, {
  install: (app: App) => {
    app.component(_IconFormula.name, _IconFormula);
  }
});

export default IconFormula;