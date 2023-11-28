import type { App } from 'vue';
import _IconCalendarThirtyTwo from './icon-calendar-thirty-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCalendarThirtyTwo.name = getComponentsPrefix() + _IconCalendarThirtyTwo.name;

const IconCalendarThirtyTwo = Object.assign(_IconCalendarThirtyTwo, {
  install: (app: App) => {
    app.component(_IconCalendarThirtyTwo.name, _IconCalendarThirtyTwo);
  }
});

export default IconCalendarThirtyTwo;