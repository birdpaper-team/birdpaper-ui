import type { App } from 'vue';
import _IconCityOne from './icon-city-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCityOne.name = getComponentsPrefix() + _IconCityOne.name;

const IconCityOne = Object.assign(_IconCityOne, {
  install: (app: App) => {
    app.component(_IconCityOne.name, _IconCityOne);
  }
});

export default IconCityOne;