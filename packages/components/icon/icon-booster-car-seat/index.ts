import type { App } from 'vue';
import _IconBoosterCarSeat from './icon-booster-car-seat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBoosterCarSeat.name = getComponentsPrefix() + _IconBoosterCarSeat.name;

const IconBoosterCarSeat = Object.assign(_IconBoosterCarSeat, {
  install: (app: App) => {
    app.component(_IconBoosterCarSeat.name, _IconBoosterCarSeat);
  }
});

export default IconBoosterCarSeat;