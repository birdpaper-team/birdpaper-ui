import type { App } from 'vue';
import _IconCalendarDot from './icon-calendar-dot.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCalendarDot.name = getComponentsPrefix() + _IconCalendarDot.name;

const IconCalendarDot = Object.assign(_IconCalendarDot, {
  install: (app: App) => {
    app.component(_IconCalendarDot.name, _IconCalendarDot);
  }
});

export default IconCalendarDot;