import type { App } from 'vue';
import _IconRoundMask from './icon-round-mask.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoundMask.name = getComponentsPrefix() + _IconRoundMask.name;

const IconRoundMask = Object.assign(_IconRoundMask, {
  install: (app: App) => {
    app.component(_IconRoundMask.name, _IconRoundMask);
  }
});

export default IconRoundMask;