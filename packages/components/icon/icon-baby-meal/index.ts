import type { App } from 'vue';
import _IconBabyMeal from './icon-baby-meal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBabyMeal.name = getComponentsPrefix() + _IconBabyMeal.name;

const IconBabyMeal = Object.assign(_IconBabyMeal, {
  install: (app: App) => {
    app.component(_IconBabyMeal.name, _IconBabyMeal);
  }
});

export default IconBabyMeal;