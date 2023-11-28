import type { App } from 'vue';
import _IconAlignVerticalCenterTwo from './icon-align-vertical-center-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignVerticalCenterTwo.name = getComponentsPrefix() + _IconAlignVerticalCenterTwo.name;

const IconAlignVerticalCenterTwo = Object.assign(_IconAlignVerticalCenterTwo, {
  install: (app: App) => {
    app.component(_IconAlignVerticalCenterTwo.name, _IconAlignVerticalCenterTwo);
  }
});

export default IconAlignVerticalCenterTwo;