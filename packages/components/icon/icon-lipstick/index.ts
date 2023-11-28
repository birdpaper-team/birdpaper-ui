import type { App } from 'vue';
import _IconLipstick from './icon-lipstick.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLipstick.name = getComponentsPrefix() + _IconLipstick.name;

const IconLipstick = Object.assign(_IconLipstick, {
  install: (app: App) => {
    app.component(_IconLipstick.name, _IconLipstick);
  }
});

export default IconLipstick;