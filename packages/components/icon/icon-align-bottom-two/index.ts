import type { App } from 'vue';
import _IconAlignBottomTwo from './icon-align-bottom-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignBottomTwo.name = getComponentsPrefix() + _IconAlignBottomTwo.name;

const IconAlignBottomTwo = Object.assign(_IconAlignBottomTwo, {
  install: (app: App) => {
    app.component(_IconAlignBottomTwo.name, _IconAlignBottomTwo);
  }
});

export default IconAlignBottomTwo;