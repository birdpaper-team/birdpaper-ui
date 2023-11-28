import type { App } from 'vue';
import _IconNutrition from './icon-nutrition.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNutrition.name = getComponentsPrefix() + _IconNutrition.name;

const IconNutrition = Object.assign(_IconNutrition, {
  install: (app: App) => {
    app.component(_IconNutrition.name, _IconNutrition);
  }
});

export default IconNutrition;