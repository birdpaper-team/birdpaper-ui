import type { App } from 'vue';
import _IconCalendarThirty from './icon-calendar-thirty.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCalendarThirty.name = getComponentsPrefix() + _IconCalendarThirty.name;

const IconCalendarThirty = Object.assign(_IconCalendarThirty, {
  install: (app: App) => {
    app.component(_IconCalendarThirty.name, _IconCalendarThirty);
  }
});

export default IconCalendarThirty;