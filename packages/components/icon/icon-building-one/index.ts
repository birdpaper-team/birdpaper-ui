import type { App } from 'vue';
import _IconBuildingOne from './icon-building-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBuildingOne.name = getComponentsPrefix() + _IconBuildingOne.name;

const IconBuildingOne = Object.assign(_IconBuildingOne, {
  install: (app: App) => {
    app.component(_IconBuildingOne.name, _IconBuildingOne);
  }
});

export default IconBuildingOne;