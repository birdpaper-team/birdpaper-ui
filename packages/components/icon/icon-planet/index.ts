import type { App } from 'vue';
import _IconPlanet from './icon-planet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlanet.name = getComponentsPrefix() + _IconPlanet.name;

const IconPlanet = Object.assign(_IconPlanet, {
  install: (app: App) => {
    app.component(_IconPlanet.name, _IconPlanet);
  }
});

export default IconPlanet;