import type { App } from 'vue';
import _IconLiqueur from './icon-liqueur.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLiqueur.name = getComponentsPrefix() + _IconLiqueur.name;

const IconLiqueur = Object.assign(_IconLiqueur, {
  install: (app: App) => {
    app.component(_IconLiqueur.name, _IconLiqueur);
  }
});

export default IconLiqueur;