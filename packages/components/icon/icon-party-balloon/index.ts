import type { App } from 'vue';
import _IconPartyBalloon from './icon-party-balloon.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPartyBalloon.name = getComponentsPrefix() + _IconPartyBalloon.name;

const IconPartyBalloon = Object.assign(_IconPartyBalloon, {
  install: (app: App) => {
    app.component(_IconPartyBalloon.name, _IconPartyBalloon);
  }
});

export default IconPartyBalloon;