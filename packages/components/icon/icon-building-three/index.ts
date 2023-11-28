import type { App } from 'vue';
import _IconBuildingThree from './icon-building-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBuildingThree.name = getComponentsPrefix() + _IconBuildingThree.name;

const IconBuildingThree = Object.assign(_IconBuildingThree, {
  install: (app: App) => {
    app.component(_IconBuildingThree.name, _IconBuildingThree);
  }
});

export default IconBuildingThree;