import type { App } from 'vue';
import _IconHotAirBalloon from './icon-hot-air-balloon.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHotAirBalloon.name = getComponentsPrefix() + _IconHotAirBalloon.name;

const IconHotAirBalloon = Object.assign(_IconHotAirBalloon, {
  install: (app: App) => {
    app.component(_IconHotAirBalloon.name, _IconHotAirBalloon);
  }
});

export default IconHotAirBalloon;