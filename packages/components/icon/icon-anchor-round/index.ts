import type { App } from 'vue';
import _IconAnchorRound from './icon-anchor-round.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAnchorRound.name = getComponentsPrefix() + _IconAnchorRound.name;

const IconAnchorRound = Object.assign(_IconAnchorRound, {
  install: (app: App) => {
    app.component(_IconAnchorRound.name, _IconAnchorRound);
  }
});

export default IconAnchorRound;