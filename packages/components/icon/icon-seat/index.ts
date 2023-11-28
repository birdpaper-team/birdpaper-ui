import type { App } from 'vue';
import _IconSeat from './icon-seat.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSeat.name = getComponentsPrefix() + _IconSeat.name;

const IconSeat = Object.assign(_IconSeat, {
  install: (app: App) => {
    app.component(_IconSeat.name, _IconSeat);
  }
});

export default IconSeat;