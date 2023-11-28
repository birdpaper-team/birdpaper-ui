import type { App } from 'vue';
import _IconBarberBrush from './icon-barber-brush.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBarberBrush.name = getComponentsPrefix() + _IconBarberBrush.name;

const IconBarberBrush = Object.assign(_IconBarberBrush, {
  install: (app: App) => {
    app.component(_IconBarberBrush.name, _IconBarberBrush);
  }
});

export default IconBarberBrush;