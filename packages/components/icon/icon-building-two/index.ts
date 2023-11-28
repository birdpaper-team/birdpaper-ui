import type { App } from 'vue';
import _IconBuildingTwo from './icon-building-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBuildingTwo.name = getComponentsPrefix() + _IconBuildingTwo.name;

const IconBuildingTwo = Object.assign(_IconBuildingTwo, {
  install: (app: App) => {
    app.component(_IconBuildingTwo.name, _IconBuildingTwo);
  }
});

export default IconBuildingTwo;