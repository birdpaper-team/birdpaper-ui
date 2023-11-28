import type { App } from 'vue';
import _IconLipstickOne from './icon-lipstick-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLipstickOne.name = getComponentsPrefix() + _IconLipstickOne.name;

const IconLipstickOne = Object.assign(_IconLipstickOne, {
  install: (app: App) => {
    app.component(_IconLipstickOne.name, _IconLipstickOne);
  }
});

export default IconLipstickOne;