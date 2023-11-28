import type { App } from 'vue';
import _IconPyramidOne from './icon-pyramid-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPyramidOne.name = getComponentsPrefix() + _IconPyramidOne.name;

const IconPyramidOne = Object.assign(_IconPyramidOne, {
  install: (app: App) => {
    app.component(_IconPyramidOne.name, _IconPyramidOne);
  }
});

export default IconPyramidOne;