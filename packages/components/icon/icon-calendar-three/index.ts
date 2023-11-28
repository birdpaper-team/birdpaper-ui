import type { App } from 'vue';
import _IconCalendarThree from './icon-calendar-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCalendarThree.name = getComponentsPrefix() + _IconCalendarThree.name;

const IconCalendarThree = Object.assign(_IconCalendarThree, {
  install: (app: App) => {
    app.component(_IconCalendarThree.name, _IconCalendarThree);
  }
});

export default IconCalendarThree;