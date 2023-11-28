import type { App } from 'vue';
import _IconAlignTextRightOne from './icon-align-text-right-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextRightOne.name = getComponentsPrefix() + _IconAlignTextRightOne.name;

const IconAlignTextRightOne = Object.assign(_IconAlignTextRightOne, {
  install: (app: App) => {
    app.component(_IconAlignTextRightOne.name, _IconAlignTextRightOne);
  }
});

export default IconAlignTextRightOne;