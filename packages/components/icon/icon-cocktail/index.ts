import type { App } from 'vue';
import _IconCocktail from './icon-cocktail.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCocktail.name = getComponentsPrefix() + _IconCocktail.name;

const IconCocktail = Object.assign(_IconCocktail, {
  install: (app: App) => {
    app.component(_IconCocktail.name, _IconCocktail);
  }
});

export default IconCocktail;