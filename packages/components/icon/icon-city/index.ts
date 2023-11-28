import type { App } from 'vue';
import _IconCity from './icon-city.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCity.name = getComponentsPrefix() + _IconCity.name;

const IconCity = Object.assign(_IconCity, {
  install: (app: App) => {
    app.component(_IconCity.name, _IconCity);
  }
});

export default IconCity;