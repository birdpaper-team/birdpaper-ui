import type { App } from 'vue';
import _IconAlignTextBottomOne from './icon-align-text-bottom-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTextBottomOne.name = getComponentsPrefix() + _IconAlignTextBottomOne.name;

const IconAlignTextBottomOne = Object.assign(_IconAlignTextBottomOne, {
  install: (app: App) => {
    app.component(_IconAlignTextBottomOne.name, _IconAlignTextBottomOne);
  }
});

export default IconAlignTextBottomOne;