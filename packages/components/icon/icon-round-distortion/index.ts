import type { App } from 'vue';
import _IconRoundDistortion from './icon-round-distortion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoundDistortion.name = getComponentsPrefix() + _IconRoundDistortion.name;

const IconRoundDistortion = Object.assign(_IconRoundDistortion, {
  install: (app: App) => {
    app.component(_IconRoundDistortion.name, _IconRoundDistortion);
  }
});

export default IconRoundDistortion;