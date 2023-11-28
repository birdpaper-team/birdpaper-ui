import type { App } from 'vue';
import _IconEngineeringBrand from './icon-engineering-brand.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEngineeringBrand.name = getComponentsPrefix() + _IconEngineeringBrand.name;

const IconEngineeringBrand = Object.assign(_IconEngineeringBrand, {
  install: (app: App) => {
    app.component(_IconEngineeringBrand.name, _IconEngineeringBrand);
  }
});

export default IconEngineeringBrand;