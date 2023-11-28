import type { App } from 'vue';
import _IconWavesLeft from './icon-waves-left.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWavesLeft.name = getComponentsPrefix() + _IconWavesLeft.name;

const IconWavesLeft = Object.assign(_IconWavesLeft, {
  install: (app: App) => {
    app.component(_IconWavesLeft.name, _IconWavesLeft);
  }
});

export default IconWavesLeft;