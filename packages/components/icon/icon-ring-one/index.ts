import type { App } from 'vue';
import _IconRingOne from './icon-ring-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRingOne.name = getComponentsPrefix() + _IconRingOne.name;

const IconRingOne = Object.assign(_IconRingOne, {
  install: (app: App) => {
    app.component(_IconRingOne.name, _IconRingOne);
  }
});

export default IconRingOne;