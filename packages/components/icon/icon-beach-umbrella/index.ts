import type { App } from 'vue';
import _IconBeachUmbrella from './icon-beach-umbrella.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBeachUmbrella.name = getComponentsPrefix() + _IconBeachUmbrella.name;

const IconBeachUmbrella = Object.assign(_IconBeachUmbrella, {
  install: (app: App) => {
    app.component(_IconBeachUmbrella.name, _IconBeachUmbrella);
  }
});

export default IconBeachUmbrella;