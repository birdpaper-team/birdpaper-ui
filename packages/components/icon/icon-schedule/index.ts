import type { App } from 'vue';
import _IconSchedule from './icon-schedule.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSchedule.name = getComponentsPrefix() + _IconSchedule.name;

const IconSchedule = Object.assign(_IconSchedule, {
  install: (app: App) => {
    app.component(_IconSchedule.name, _IconSchedule);
  }
});

export default IconSchedule;