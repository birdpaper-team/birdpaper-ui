import type { App } from 'vue';
import _IconHeadsetOne from './icon-headset-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeadsetOne.name = getComponentsPrefix() + _IconHeadsetOne.name;

const IconHeadsetOne = Object.assign(_IconHeadsetOne, {
  install: (app: App) => {
    app.component(_IconHeadsetOne.name, _IconHeadsetOne);
  }
});

export default IconHeadsetOne;