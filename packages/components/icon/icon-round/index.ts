import type { App } from 'vue';
import _IconRound from './icon-round.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRound.name = getComponentsPrefix() + _IconRound.name;

const IconRound = Object.assign(_IconRound, {
  install: (app: App) => {
    app.component(_IconRound.name, _IconRound);
  }
});

export default IconRound;