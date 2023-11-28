import type { App } from 'vue';
import _IconPokeballOne from './icon-pokeball-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPokeballOne.name = getComponentsPrefix() + _IconPokeballOne.name;

const IconPokeballOne = Object.assign(_IconPokeballOne, {
  install: (app: App) => {
    app.component(_IconPokeballOne.name, _IconPokeballOne);
  }
});

export default IconPokeballOne;