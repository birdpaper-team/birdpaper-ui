import type { App } from 'vue';
import _IconAlignRightOne from './icon-align-right-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignRightOne.name = getComponentsPrefix() + _IconAlignRightOne.name;

const IconAlignRightOne = Object.assign(_IconAlignRightOne, {
  install: (app: App) => {
    app.component(_IconAlignRightOne.name, _IconAlignRightOne);
  }
});

export default IconAlignRightOne;