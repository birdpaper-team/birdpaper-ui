import type { App } from 'vue';
import _IconFactoryBuilding from './icon-factory-building.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFactoryBuilding.name = getComponentsPrefix() + _IconFactoryBuilding.name;

const IconFactoryBuilding = Object.assign(_IconFactoryBuilding, {
  install: (app: App) => {
    app.component(_IconFactoryBuilding.name, _IconFactoryBuilding);
  }
});

export default IconFactoryBuilding;